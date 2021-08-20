# 静的ポートフォリオ
アーカイブ:2021/8/20

## worksコンテンツの生成
works内のコンテンツはxmlとマークダウンが混じった独自の形式で記述し、コマンドライン上からpythonスクリプトでhtmlに変換する  

- xml2html.py
    - xmlをhtmlに変換するpyhtonスクリプト
    - ./works/admin/にある
- markdown/
    - xmlの置き場所
    - ファイル名は自由
- template.html
    - htmlのテンプレート
    - xml2html.py内で用いる
- contentsTree.csv
    - worksコンテンツの順序を整理するためのcsv
    - treeとなっているが基本的には一方向配列
    - .html同士のリンクの生成に用いる

- xmlの書き方
```
<title>タイトル</title>
<info>日付 / コンテンツの形式など</info>
<mov>動画のリンク(推奨:youtube)</mov>
<imgl0>画像のリンク1</imgl0>
<imgr0>画像のリンク2</imgr0>
<imgl1>画像は幾つでも追加できる</imgl1>
<left>
左側の文書コンテンツ
マークダウン形式で記述
インデントはしないほうがいい
</left>

<right>
右側の文書コンテンツ
マークダウン形式で記述
</right>
```


- 実行方法
```
python3 xml2html.py markdown/
```



## 画像のリサイズ
```
sh resize.sh [dirname] [width px]
```
同ディレクトリ下にarchiveディレクトリが生成されて、オリジナル画像を自動的にアーカイブします。