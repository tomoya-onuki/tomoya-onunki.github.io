import markdown
import glob
import sys
import re
import json
import html
from html.parser import HTMLParser

###############
## HTML解析
###############
class xmlParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.found_tag = False
        self.texts = {}
        self.tag = ''

    def handle_starttag(self, tag, attrs):
        self.found_tag = True
        self.tag = tag

    def handle_data(self, data):
        if self.found_tag:
            self.texts[self.tag] = data
            self.found_tag = False

    def getXmlList(self):
        return self.texts

###############
## HTML整形
###############
def formatHTML(s, reset=None):  # HTMLを整形する。第2引数があるときはすでにあるインデントを除去する。
    if reset is not None:  # 第2引数がある時。
        s = re.sub(r'(?<=>)\s+?(?=<)', "", s)  # 空文字だけのtextとtailを削除してすでにあるインデントをリセットする。
    indentunit = "\t"  # インデントの1単位。
    tagregex = re.compile(r"(?s)<(?:\/?(\w+).*?\/?|!--.*?--)>|(?<=>).+?(?=<)")  # 開始タグと終了タグ、コメント、テキストノードすべてを抽出する正規表現オブジェクト。ただし<を含んだテキストノードはそこまでしか取得できない。
    replTag = repltagCreator(indentunit)  # マッチオブジェクトを処理する関数を取得。
    s = html.unescape(s)  # HTMLの文字参照をユニコードに戻す。
    s = tagregex.sub(replTag, s)  # script要素とstyle要素以外インデントを付けて整形する。
    return s.lstrip("\n")  # 先頭の改行を削除して返す。
def repltagCreator(indentunit):  # 開始タグと終了タグのマッチオブジェクトを処理する関数を返す。
    starttagregex = re.compile(r'<\w+.*?>')  # 開始タグ。
    endendtagregex = re.compile(r'<\/\w+>$')  # 終了タグで終わっているか。
    noendtags = "br", "img", "hr", "meta", "input", "embed", "area", "base", "col", "link", "param", "source", "wbr", "track"  # HTMLでは終了タグがなくなるタグ。
    c = 0  # インデントの数。
    starttagtype = ""  # 開始タグと終了タグが対になっているかを確認するため開始タグの要素型をクロージャに保存する。
    txtnodeflg = False  # テキストノードを処理したときに立てるフラグ。テキストノードが分断されたときのため。
    def replTag(m):  # 開始タグと終了タグのマッチオブジェクトを処理する関数。
        nonlocal c, starttagtype, txtnodeflg  # 変更するクロージャ変数。
        txt = m.group(0)  # マッチした文字列を取得。
        tagtype = m.group(1)  # 要素型を取得。Noneのときもある。
        tagtype = tagtype and tagtype.lower()  # 要素型を小文字にする。
        if tagtype in noendtags:  # 空要素の時。開始タグと区別がつかないのでまずこれを最初に判別する必要がある。
            txt = "".join(["\n", indentunit*c, txt])  # タグの前で改行してインデントする。
            starttagtype = ""  # 開始タグの要素型をリセットする。
            txtnodeflg = False  # テキストノードのフラグを倒す。
        elif txt.endswith("</{}>".format(tagtype)):  # 終了タグの時。
            c -= 1  # インデントの数を減らす。
            if tagtype!=starttagtype:  # 開始タグと同じ要素型ではない時。
                txt = "".join(["\n", indentunit*c, txt])  # タグの前で改行してインデントする。
            starttagtype = ""  # 開始タグの要素型をリセットする。
            txtnodeflg = False  # テキストノードのフラグを倒す。
        elif starttagregex.match(txt) is not None:  # 開始タグの時。
            txt = "".join(["\n", indentunit*c, txt])  # タグの前で改行してインデントする。
            starttagtype = tagtype  # タグの要素型をクロージャに取得。
            c += 1  # インデントの数を増やす。
            txtnodeflg = False  # テキストノードのフラグを倒す。
        elif txt.startswith("<!--"):  # コメントの時。
            pass  # そのまま返す。
        else:  # 上記以外はテキストノードと判断する。
            if not txt.strip():  # 改行や空白だけのとき。
                txt = ""  # 削除する。
            if "\n" in txt: # テキストノードが複数行に渡る時。
                txt = txt.rstrip("\n").replace("\n", "".join(["\n", indentunit*c]))  # 最後の改行を除いたあと全行をインデントする。
                if not txtnodeflg:  # 直前に処理したのがテキストノードではない時。
                    txt = "".join(["\n", indentunit*c, txt])  # 前を改行してインデントする。
                if endendtagregex.search(txt):  # 終了タグで終わっている時。テキストノードに<があるときそうなる。
                    c -= 1  # インデントを一段上げる。
                    txt = endendtagregex.sub(lambda m: "".join(["\n", indentunit*c, m.group(0)]), txt)  # 終了タグの前を改行してインデントする。
                starttagtype = ""  # 開始タグの要素型をリセットする。開始タグと終了タグが一致しているままだと終了タグの前で改行されないため。
            elif not starttagtype:  # 単行、かつ、開始タグが一致していない時。
                txt = "".join(["\n", indentunit*c, txt])  # テキストノードの前で改行してインデントする。
            txtnodeflg = True  # テキストノードのフラグを立てる。
        return txt
    return replTag


###############
## メインの処理
###############
def generateHTML(tempStr, xmlList):
    # 左側のコンテンツの分析と整形
    leftContents = ''
    rightContents = ''
    for tag, value in xmlList.items():
        value = value.strip()
        # TitleとInfoのとき
        if re.fullmatch(tag, 'title') or re.fullmatch(tag, 'info'):
            tempStr = tempStr.replace('<!-- '+tag+' -->', value)

        # リンクのとき
        # if re.fullmatch(tag, 'prev') or re.fullmatch(tag, 'next'):
        #     str = '<a id="'+tag+'" href="'+value+'.html"></a>'
        #     tempStr = tempStr.replace('<!-- '+tag+' -->', str)

        # 右側コンテンツ
        if re.fullmatch(tag, 'right'):
            rightContents = '<div class="block_r">' + md.convert(value) + '</div>'

        # 左側コンテンツ
        if re.fullmatch(tag, 'mov'):
            token = value.split('/')
            url = 'https://www.youtube.com/embed/' + token[-1]
            leftContents += '<div class="mov">\n<iframe id="youtbe_player" src="' + url + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div>\n'
        if re.search('img\d', tag):
            leftContents += '<img src="' + value + '">\n'
        if re.search('imgr\d', tag):
            leftContents += '<img class="half_img_r" src="' + value + '">\n'
        if re.search('imgl\d', tag):
            leftContents += '<img class="half_img_l" src="' + value + '">\n'


    # コンテンツの整形
    leftContents = '<div class="block_l">\n' + leftContents + '\n</div>'
    contents = leftContents + '\n' + rightContents
    tempStr = tempStr.replace('<!-- contents -->', md.convert(contents))
    tempStr = tempStr.replace('<p>','<div>').replace('</p>','</div>')

    return tempStr


###############
## コンテンツのリンクを生成
###############
def generateLinks(tempStr, contentsName, cTree):
    next = cTree.nextContentsName(contentsName)
    if next is not None:
        str = '<a id="next" href="'+next+'.html"></a>'
        tempStr = tempStr.replace('<!-- next -->', str)

    prev = cTree.prevContentsName(contentsName)
    if prev is not None:
        str = '<a id="prev" href="'+prev+'.html"></a>'
        tempStr = tempStr.replace('<!-- prev -->', str)

    str = '<a id="close" href="./#'+contentsName+'"></a>'
    tempStr = tempStr.replace('<!-- close -->', str)
    return tempStr


###############
## コンテンツのリンクを取得
###############
class contentsTree(object):
    def __init__(self):
        super(contentsTree, self).__init__()

    def fileOpen(self):
        fp = open('contentsTree.csv','r')
        buf = ''
        for line in fp:
            buf += line
        fp.close()
        buf = buf.replace('\n', '')
        self.contentsList = buf.split(',')
        # print(self.contentsList)


    def prevContentsName(self, contentsName):
        for i, name in enumerate(self.contentsList):
            # print(name)
            if contentsName == name:
                if i > 0:
                    return self.contentsList[i-1]
        return None

    def nextContentsName(self, contentsName):
        for i, name in enumerate(self.contentsList):
            if contentsName == name:
                if i < len(self.contentsList) - 1:
                    return self.contentsList[i+1]
        return None




###############
## メインの処理
###############
args = sys.argv
md = markdown.Markdown()


if len(args) == 2:
    dirname = args[1]
    if not re.findall('.*/', args[1]):
        dirname = args[1]+'/'

    cTree = contentsTree()
    cTree.fileOpen()

    for inFile in glob.glob(dirname+'*.xml'):
        outFile = inFile.replace('.xml', '.html').replace('markdown', '..') # 入力ファイル名を出力ファイル名に変換

        token = inFile.split('/')
        contentsName = token[len(token)-1].replace('.xml', '')
        print('Out: '+outFile)
        # print('In : '+inFile+',  Out: '+outFile)

        # 入力ファイルの内容を文字列として取得
        inFp = open(inFile,'r')
        inStr = ''
        mdText = {}
        for line in inFp:
            inStr += line
        inFp.close()

        # テンプレートファイルを取得
        tempFp = open('./template.html','r')
        tempStr = ''
        for line in tempFp:
            tempStr += line
        tempFp.close()

        # XML解析
        parser = xmlParser()
        parser.feed(inStr)
        xmlList = parser.getXmlList()

        # XML to HTML
        tempStr = generateHTML(tempStr, xmlList)

        # コンテンツのリンクを生成
        tempStr = generateLinks(tempStr, contentsName, cTree)

        # 全体の整形
        tempStr = formatHTML(tempStr)

        # 新しいファイルに書き出す
        outFp = open(outFile,'w')
        outFp.write(tempStr)
        outFp.close()


else:
    print('Please Input Dir Name.')
