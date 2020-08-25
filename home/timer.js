
var timer1; //タイマーを格納する変数（タイマーID）の宣言
var audio = new Audio('./sound.mp3');

//カウントダウン関数を1000ミリ秒毎に呼び出す関数
function cntStart()
{
  document.timer.elements[2].disabled=true;
  timer1=setInterval("countDown()",1000);
}

//タイマー停止関数
function cntStop()
{
  document.timer.elements[2].disabled=false;
  clearInterval(timer1);
}

//カウントダウン関数
function countDown()
{
  var min = parseInt(document.timer.elements[0].value);
  var sec = parseInt(document.timer.elements[1].value);

  if(Number.isInteger(min) && Number.isInteger(sec)) {
    tmWrite(min*60+sec-1);
  } else {
    alert("Please input integer.")
  }
}

//残り時間を書き出す関数
function tmWrite(int)
{
  int=parseInt(int);

  if (int<=0)
  {
    reSet();
    audio.play();
    if (!alert("Time's up !") ) {
      audio.pause();
    }
  }
  else
  {
    //残り分数はintを60で割って切り捨てる
    document.timer.elements[0].value=Math.floor(int/60);
    //残り秒数はintを60で割った余り
    document.timer.elements[1].value=int % 60;
  }
}

//フォームを初期状態に戻す（リセット）関数
function reSet()
{
  document.timer.elements[0].value="0";
  document.timer.elements[1].value="0";
  document.timer.elements[2].disabled=false;
  clearInterval(timer1);
}
