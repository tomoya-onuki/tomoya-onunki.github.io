var fname = ["./img/index/0.JPG","./img/index/1.JPG","./img/index/10.JPG","./img/index/11.JPG","./img/index/12.JPG","./img/index/13.JPG","./img/index/14.JPG","./img/index/15.JPG","./img/index/16.JPG","./img/index/18.JPG","./img/index/2.JPG","./img/index/3.JPG","./img/index/4.JPG","./img/index/5.JPG","./img/index/6.JPG","./img/index/7.JPG","./img/index/8.JPG","./img/index/9.JPG","./img/index/DSC03531.JPG","./img/index/DSC04365.JPG","./img/index/LRG_DSC03913.JPG",];
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
  console.log(delta);
  setTimeout("imgTimer()",8000);
}