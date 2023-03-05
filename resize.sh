#!/bin/sh
if [ $# = 2 ]; then
  date=`date '+%Y-%m-%d_%H-%M-%S'`
  acv=$1'archive_'$date;

  mkdir $acv
  for file in $1*; do
    # echo $file
    if [ `echo $file | grep '.png'` ] || [ `echo $file | grep '.jpg'` ] || [ `echo $file | grep '.jpeg'` ] || [ `echo $file | grep '.JPG'` ] ; then
      cp $file $acv
      sips -Z $2 $file
    fi
  done

  echo 'done resize!'
  echo 'dir is '$1
  echo 'resize to '$2' x 255 px'
else
  echo 'Usage : '
  echo '$ sh resize.sh [dirname] [width px]'
fi