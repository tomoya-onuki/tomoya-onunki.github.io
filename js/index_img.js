var max = fname.length;
var count = 0;
var idxList = getRandomIdx();

imgTimer();

function imgTimer() {
  var imgtag = document.getElementById('image_place');

  imgtag.src = fname[idxList[count]];
  count++;

  if (count >= max) {
    count = 0;
    idxList = getRandomIdx();
  }

  setTimeout("imgTimer()", 3000);
}

function getRandomIdx() {
  var arr = [];
  var numArr = [];

  for(var i = 0; i < max; i++){
    arr[i] = i;
  }

  for(var j = max; j > 0; j--) {
    rndNum = Math.floor(Math.random()*j);
    numArr.push(arr[rndNum]);
    arr[rndNum] = arr[j-1];
  }

  return numArr;
}
