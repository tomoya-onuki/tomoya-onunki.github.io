#!/bin/sh
if [ "$1" == "--build" -a $# = 1 ]; then
    echo 'python3 ./works/admin/xml2html.py ./works/admin/xml/'
    python3 ./works/admin/xml2html.py ./works/admin/xml/
elif [ "$1" == "--push" -a $# = 2 ]; then
    echo '$ git add .'
    git add .

    echo '$ git commit -m "'$2'"'
    git commit -m $2

    echo '$ git push origin master'
    git push origin master
else 
    echo ''
    echo 'USAGE'
    echo '  --build : worksのコンテンツを出力'
    echo '  --push "message" : githubにコミット'
    echo ''
fi