import markdown
import glob
import sys
import re
import html
from os import path
import os
import shutil
from html.parser import HTMLParser


# HTML解析
class xml_parser(HTMLParser):
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

    def get_xml_list(self):
        return self.texts


# HTML整形
def format_html(s, reset=None):  # HTMLを整形する。第2引数があるときはすでにあるインデントを除去する。
    if reset is not None:  # 第2引数がある時。
        # 空文字だけのtextとtailを削除してすでにあるインデントをリセットする。
        s = re.sub(r'(?<=>)\s+?(?=<)', "", s)
    indentunit = "\t"  # インデントの1単位。
    # 開始タグと終了タグ、コメント、テキストノードすべてを抽出する正規表現オブジェクト。ただし<を含んだテキストノードはそこまでしか取得できない。
    tagregex = re.compile(r"(?s)<(?:\/?(\w+).*?\/?|!--.*?--)>|(?<=>).+?(?=<)")
    replTag = repltag_creator(indentunit)  # マッチオブジェクトを処理する関数を取得。
    s = html.unescape(s)  # HTMLの文字参照をユニコードに戻す。
    s = tagregex.sub(replTag, s)  # script要素とstyle要素以外インデントを付けて整形する。
    s.replace('\n', '')
    return s.lstrip("\n")  # 先頭の改行を削除して返す。


def repltag_creator(indentunit):  # 開始タグと終了タグのマッチオブジェクトを処理する関数を返す。
    starttagregex = re.compile(r'<\w+.*?>')  # 開始タグ。
    endendtagregex = re.compile(r'<\/\w+>$')  # 終了タグで終わっているか。
    # HTMLでは終了タグがなくなるタグ。
    noendtags = "br", "img", "hr", "meta", "input", "embed", "area", "base", "col", "link", "param", "source", "wbr", "track"
    c = 0  # インデントの数。
    starttagtype = ""  # 開始タグと終了タグが対になっているかを確認するため開始タグの要素型をクロージャに保存する。
    txtnodeflg = False  # テキストノードを処理したときに立てるフラグ。テキストノードが分断されたときのため。

    # 開始タグと終了タグのマッチオブジェクトを処理する関数。
    def replTag(m):
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
            if tagtype != starttagtype:  # 開始タグと同じ要素型ではない時。
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
                txt = ""    # 削除する。
            if "\n" in txt:
                # テキストノードが複数行に渡る時。
                txt = txt.rstrip("\n").replace("\n", "".join(["\n", indentunit*c]))  # 最後の改行を除いたあと全行をインデントする。
                if not txtnodeflg:  # 直前に処理したのがテキストノードではない時。
                    txt = "".join(["\n", indentunit*c, txt])  # 前を改行してインデントする。
                if endendtagregex.search(txt):
                    # 終了タグで終わっている時。テキストノードに<があるときそうなる。
                    # インデントを一段上げる。
                    c -= 1
                    # 終了タグの前を改行してインデントする。
                    txt = endendtagregex.sub(lambda m: "".join(["\n", indentunit * c, m.group(0)]), txt)
                # 開始タグの要素型をリセットする。開始タグと終了タグが一致しているままだと終了タグの前で改行されないため。
                starttagtype = "" 
            elif not starttagtype:  # 単行、かつ、開始タグが一致していない時。
                # テキストノードの前で改行してインデントする。
                txt = "".join(["\n", indentunit*c, txt])
            txtnodeflg = True  # テキストノードのフラグを立てる。
        return txt
    return replTag


# メインの処理
def generate_html(temp_str, xml_list):
    md = markdown.Markdown()
    # 左側のコンテンツの分析と整形
    left_contents = ''
    right_contents = ''

    # タグの処理
    for tag, value in xml_list.items():
        value = value.strip()

        # TitleとInfoのとき
        if re.fullmatch(tag, 'title') or re.fullmatch(tag, 'info'):
            temp_str = temp_str.replace('<!-- '+tag+' -->', value)

        # 右側コンテンツ
        elif re.fullmatch(tag, 'right'):
            right_contents = f'<div class="block_r">{md.convert(value)}</div>'

        # 左側コンテンツ(メイン)
        elif re.fullmatch(tag, 'mov'):
            if re.search('youtu', value):
                token = value.split('/')
                url = f'https://www.youtube.com/embed/{token[-1]}'
                left_contents += f'<div class="mov">\n<iframe id="youtbe_player" src="{url}" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div>\n'
            elif re.search('drive', value):
                left_contents += f'<div class="mov">\n<iframe src="{value}" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div>\n'
            else:
                left_contents += f'<div class="mov">\n<iframe src="{value}" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div>\n'
        elif re.search('img\d', tag):
            left_contents += f'<img src="{value}">\n'

        # 左側コンテンツ(サブ)
        elif re.search('imgr\d', tag):
            left_contents += f'<img class="half_img_r" src="{value}">\n'
        elif re.search('imgl\d', tag):
            left_contents += f'<img class="half_img_l" src="{value}">\n'
        elif re.fullmatch(tag, 'left'):
            left_contents += md.convert(value)

    # コンテンツの整形
    left_contents = f'<div class="block_l">\n{left_contents}\n</div>'
    contents = f'{left_contents}\n{right_contents}'
    contents = contents.replace('\\', '<br>')
    htmlContents = contents
    # htmlContents = md.convert(contents)
    temp_str = temp_str.replace('<!-- contents -->', htmlContents)
    temp_str = temp_str.replace('<p>', '<div>').replace('</p>', '</div>')

    return temp_str


# コンテンツのリンクを生成
def generate_links(temp_str, contents_name, c_tree):
    next = c_tree.next_contents_name(contents_name)
    # print(contentsName, cTree, next)
    if next is not None:
        str = f'<a id="next" href="{next}.html"></a>'
        temp_str = temp_str.replace('<!-- next -->', str)

    prev = c_tree.prev_contents_name(contents_name)
    if prev is not None:
        str = f'<a id="prev" href="{prev}.html"></a>'
        temp_str = temp_str.replace('<!-- prev -->', str)

    str = '<a id="close" href="./"></a>'
    # str = '<a id="close" href="../#'+contentsName+'"></a>'
    tempStr = temp_str.replace('<!-- close -->', str)
    return tempStr


# コンテンツのリンクを取得
class contents_tree(object):
    def __init__(self):
        super(contents_tree, self).__init__()

    def file_open(self, dirname):
        contents_tree = path.join(path.dirname(__file__), f'res/{dirname}/contentsTree.csv')
        self.contents_list = []
        self.metadata_list = []
        with open(contents_tree, 'r') as fp:
            lines = fp.read().splitlines()
        for line in lines:
            token = line.split(',')
            # メタデータ
            self.metadata_list.append(token)
            # ID
            self.contents_list.append(token[0])

    def prev_contents_name(self, contents_name):
        for i, name in enumerate(self.contents_list):
            # print(name)
            if contents_name == name:
                if i > 0:
                    return self.contents_list[i-1]
        return None

    def next_contents_name(self, contents_name):
        for i, name in enumerate(self.contents_list):
            if contents_name == name:
                if i < len(self.contents_list) - 1:
                    return self.contents_list[i+1]
        return None

    def get_metadata_list(self):
        keys = [
            'id',
            'genre',
            'title',
            'date',
            'detail_genre',
            'size',
            'roll',
            'project_name'
            ]
        result = []
        for metadata in self.metadata_list:
            tmp = {}
            for i, k in enumerate(keys):
                if len(metadata) >= i:
                    tmp[k] = metadata[i]
                else:
                    tmp[k] = ''
            result.append(tmp)
        return result
    

def make_index_html(dirname, metadata_list):
    # index.htmlを作成
    html_text = ''
    for metadata in metadata_list:
        # タイトルとdivを生成
        tmp = f"""
        <div id="{metadata['id']}" class="flex_box {metadata['genre']}-box">
            <a href="/{metadata['genre']}/{metadata['id']}.html">
                <img class="index-img" src="/img/index/{metadata['id']}.jpeg">
                <div class="mask {metadata['genre']}-mask">
                    <div class="caption">
                        <div class="title">{metadata['title']}</div>
                        <div class="info">{metadata['date']}</div>
                        <div class="info">{metadata['detail_genre']}</div>
                        <div class="info">{metadata['size']}</div>
                        <div class="info">{metadata['roll']}</div>
                        <div class="info">{metadata['project_name']}</div>
                    </div>
                </div>
            </a>
        </div>
        """
        html_text += tmp

    # テンプレートファイルを取得
    with open(path.join(path.dirname(__file__), './res/templateIndex.html'), 'r') as f:
        lines = f.read().splitlines()
        temp_idx_str = ''
        for line in lines:
            temp_idx_str += line

    index_str = temp_idx_str.replace('<!--CONTENTS-->', html_text)

    menu_text = """
    <div id="head-menu-box">
        <a href="/">Featured</a>
        <a href="/art">Art</a>
        <a href="/film">Film</a>
        <a href="/code">Code</a>
        <a href="/profile.html">About</a>
    </div>
    """
    if len(dirname) > 0:
        top_upper_dirname = dirname[0].upper() + dirname[1:]
        menu_text = menu_text.replace(top_upper_dirname, f'<u>{top_upper_dirname}</u>')
    else:
        menu_text = menu_text.replace('Featured', '<u>Featured</u>')
    index_str = index_str.replace('<!-- MENU -->', menu_text)
    

    dir_path = f'./dist/{dirname}/'
    # if os.path.exists(dir_path):
    #     shutil.rmtree(dir_path)
    # os.mkdir(dir_path)
    with open(f'{dir_path}index.html', 'w') as f:
        index_str = re.sub('>\s+<', '><', index_str)
        index_str = re.sub('\s\s+', ' ', index_str)
        f.write(index_str)
    print(f'Out: {dir_path}index.html')


def make_work_htmls(dirname, c_tree, metadata_list):
    # workディレクトリの内容物の生成
    xml_fnames = [metadata['id'] for metadata in metadata_list]
    for in_file in glob.glob('./res//xml/*.xml'):
        fid = in_file.split('/')[-1].replace('.xml', '')
        # csvに含まれていなかったら飛ばす
        if not fid in xml_fnames:
            continue

        out_file = f"./dist/{dirname}/{fid}.html"

        token = in_file.split('/')
        contents_name = token[len(token)-1].replace('.xml', '')
        print('Out: '+out_file)

        # 入力ファイルの内容を文字列として取得
        with open(in_file, 'r') as f:
            in_str = ''
            for line in f.readlines():
                in_str += line

        # テンプレートファイルを取得
        temp_fname = path.join(path.dirname(__file__), './res/template.html')
        with open(temp_fname, 'r') as f:
            temp_str = ''
            for line in f.readlines():
                temp_str += line

        # XML解析
        parser = xml_parser()
        parser.feed(in_str)
        xmlList = parser.get_xml_list()

        # XML to HTML
        # print(xmlList)
        temp_str = generate_html(temp_str, xmlList)

        # コンテンツのリンクを生成
        temp_str = generate_links(temp_str, contents_name, c_tree)

        # 全体の整形
        temp_str = re.sub('>\s+<', '><', temp_str)
        temp_str = re.sub('\s\s+', ' ', temp_str)

        # 新しいファイルに書き出す
        with open(out_file, 'w') as f:
            f.write(temp_str)


def main():
    args = sys.argv
    if len(args) >= 2:
        for dirname in args[1:]:
            print(f'{dirname}')

            c_tree = contents_tree()
            c_tree.file_open(dirname)
            metadata_list = c_tree.get_metadata_list()
            make_index_html(dirname, metadata_list)
            make_work_htmls(dirname, c_tree, metadata_list)

    c_tree = contents_tree()
    c_tree.file_open('')
    metadata_list = c_tree.get_metadata_list()
    make_index_html('', metadata_list)

if __name__ == '__main__':
    main()
