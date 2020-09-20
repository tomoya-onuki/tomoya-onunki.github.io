
var audio = new Audio('./res/sound.mp3');

var min = document.getElementById('min');
var sec = document.getElementById('sec');
var start = document.getElementById('start1');
var stop = document.getElementById('stop1');
var reset = document.getElementById('reset1');

var time = 0;
var time0 = 0;
var timerId;

function updateTimeText(){
  min.value = Math.floor(time / 60000);
  sec.value = Math.floor(time % 60000 / 1000);
}


//再帰的に使える用の関数
function countDown(){
  time -= 1000;
  updateTimeText();

  if(time <= 0) {
    audio.play();
    clear();
    if (!alert("Time's up !") ) {
      audio.pause();
      initTime(time0);
    }
  }
}

function clear() {
  clearInterval(timerId);
}

function initTime(t) {
  time = t;
  updateTimeText();
}

//startボタンにクリック時のイベントを追加(タイマースタートイベント)
start.addEventListener('click',function(){
  var m = parseInt(min.value);
  var s = parseInt(sec.value);
  if(Number.isInteger(m) && Number.isInteger(s)) {
    time = m * 60000 + s * 1000; // ms
    time0 = time;
    if (time > 0) timerId = setInterval(countDown, 1000);
  } else {
    clear();
    // alert("Please Input Integer")
  }
});

//stopボタンにクリック時のイベントを追加(タイマーストップイベント)
stop.addEventListener('click',function(){
  clear();
});

reset.addEventListener('click',function(){
  clear();
  initTime(0);
});
