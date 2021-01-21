import markdown
import glob
import sys
import re
import json

args = sys.argv
md = markdown.Markdown()

if len(args) == 2:

    dirname = args[1]
    if not re.findall('.*/', args[1]):
        dirname = args[1]+'/'

    i = 0
    for inFile in glob.glob(dirname+'*'):
        outFile = inFile.replace('.json', '.html').replace('markdown', '..') # 入力ファイル名を出力ファイル名に変換

        print(str(i)+'  In : '+inFile)
        print(str(i)+'  Out: '+outFile)

        # 入力ファイルの内容を文字列として取得
        inFp = open(inFile,'r')
        inJson = json.load(inFp)
        # mdStr = ''
        # for line in inFp:
        #     mdStr += line
        inFp.close()



        tempFp = open('template.html','r')
        tempStr = ''
        for line in tempFp:
            tempStr += line
        tempFp.close()
        tempStr = (
            tempStr.replace('#title',inJson['title'])
            .replace('#next',inJson['next'])
            .replace('#prev',inJson['prev'])
            .replace('#info',inJson['info'])
            .replace('#left',inJson['left'])
            .replace('#right',inJson['right'])
        )


        outFp = open(outFile,'w')
        outFp.write(tempStr)
        outFp.close()

        i+=1
else:
    print('Please Input Dir Name.')
