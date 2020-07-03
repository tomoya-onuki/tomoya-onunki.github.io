var max = fname.length;
var delta = 1;
var count = Math.floor(Math.random() * max);
imgTimer();

function imgTimer() {
  document.image_place.src = fname[count];
  count += delta;
  if (count >= max) {
    delta = Math.floor(Math.random() * 5);
    count = 0;
  }
  setTimeout("imgTimer()",8000);
}
