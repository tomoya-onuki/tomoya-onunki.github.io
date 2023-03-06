import sys
import csv
import os

args = sys.argv
path = args[1] if args[1].endswith('/') else args[1] + '/'

newImgNameList = []
with open('contentsList.csv') as f:
    reader = csv.reader(f)
    for row in reader:
        newImgNameList.append(row[0])

flist = os.listdir(path)
flist.sort()
oldImgNameList = list(filter(lambda x: '.jpeg' in x, flist))

for i, newFname in enumerate(newImgNameList):
    os.rename(path + oldImgNameList[i], path + newFname + '.jpeg')