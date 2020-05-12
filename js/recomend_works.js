var id = ["rotate", "express", "yuragi", "black"];
var url = "https://www.u.tsukuba.ac.jp/~s1711441/portfolio/";
var url2 = "./gif/";
var max = id.length;
// var count = Math.floor(Math.random() * max);
var count = 0;
imgTimer();

function imgTimer() {
  document.getElementById("mov_place").src = url+id[count]+".mov";
  document.getElementById("work_link").href = "./works/index.html#"+id[count];
  count ++;
  if (count >= max) {
    count = 0;
  }
  console.log(count);
  setTimeout("imgTimer()",7000);
}
