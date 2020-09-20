// API読み込み
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// API読み込み後にプレーヤーの設定
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube_player');
  player.

  var closeBtn = document.getElementsByClassName('close');
  for (let i = 0; i < closeBtn.length; i++) {
    console.log(i);
    closeBtn[i].addEventListener('click', function() {
      console.log("pause");
      player.pauseVideo();
      // player.pauseVideo();
    }, false);
  }

}

// ボタンクリック時の操作

// closeBtn[2].addEventListener('click', function() {
//   console.log("pause");
//   player.pauseVideo();
// }, false);
