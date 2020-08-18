// img要素を生成
for (var i = 0; i < fname.length; i++) {
  var img = document.createElement('img');
  img.src = fname[i];
  img.className = 'photo_gallery';
  document.getElementById('wrapper').appendChild(img);
}
