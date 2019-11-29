var img_size = 14;
var img = document.getElementById("image_place"); // img要素を取得する
setInterval("changeImage()", 6000);               // 一定時間で関数を実行

// 画像を切り替える関数
function changeImage() {
  var idx = Math.floor(Math.random() * img_size);
  img.src = "./img/top/" + idx + ".jpeg";
}
