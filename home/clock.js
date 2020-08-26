function clock() {
    // var weeks = new Array("Sun","Mon","Thu","Wed","Thr","Fri","Sat");
    var weeks = new Array("日","月","火","水","木","金","土");
    // 現在日時を表すインスタンスを取得
    var now = new Date();
    var y = now.getFullYear();
    var mo = now.getMonth() + 1;　// 月 0~11で取得されるので実際の月は+1したものとなる
    var d = now.getDate();
    var w = weeks[now.getDay()];
    var h = now.getHours();
    var mi = now.getMinutes();
    var s = now.getSeconds();

    // 日付時刻文字列のなかで常に2ケタにしておきたい部分はここで処理
    if (mo < 10) mo = "0" + mo;
    if (d < 10) d = "0" + d;
    if (mi < 10) mi = "0" + mi;
    if (s < 10) s = "0" + s;

    document.getElementById("clock_date").innerHTML =  y + "年" + mo + "月" + d + "日 " + w + "曜日";
    // document.getElementById("clock_date").innerHTML =  y + "/" + mo + "/" + d + " (" + w + ")";
    document.getElementById("clock_time").innerHTML = h + ":" + mi + ":" + s;
}
// 上記のclock関数を1000ミリ秒ごと(毎秒)に実行する
setInterval(clock, 1000);
