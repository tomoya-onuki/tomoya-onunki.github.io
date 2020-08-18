

var max = fname.length;
var delta = 1;
var count = Math.floor(Math.random() * max);
imgTimer();

function imgTimer() {
  var imgtag = document.getElementById('image_place');

  // $.when( //ここに先に終わらせたい処理
  //   $(imgtag).fadeTo("slow", 0.15)
  //
  // ).done(function(){
    imgtag.src = fname[count];
    // $(imgtag).hide().fadeIn();
    // $(imgtag)fadeTo("slow", 1.0);

    count += delta;
    if (count >= max) {
      delta = Math.floor(Math.random() * 5)+1;
      count = 0;
    }
  // });

  setTimeout("imgTimer()", 3000);
}
