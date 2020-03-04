<?php
require_once("index_update.php");
require_once("profile_convert.php");
require_once("work_content_convert.php");

global $border;
global $date;
global $title;
global $work_code;

// コマンドライン引数が少ないとき
if ($argc == 1) {
  echo "\n";
  echo " filname         : convert filename to filname.html .\n";
  echo "    -index       : update /works/index.html .\n";
  echo "      year.month : add date.\n";
  echo "      border     : add border 1 px.\n";
  echo "    -img         : make image directory\n\n";
  echo " -profile        : update profile.html\n";
  echo " -h              : usage convert.php\n\n";
  exit();
}

switch ($argv[1]) {




  case "-profile":
    profile_convert();
    break;


  default:
    // 書き出すファイル名を生成
    $tmp = explode("/", $argv[1]);
    $tmp = explode(".", $tmp[count($tmp)-1]);
    $work_code = $tmp[0];

    // workコンテンツの更新・変換
    work_content_convert($argv, $argc);

    //  オプションの処理
    for($i = 2; $i < $argc; $i++) {

      // indexの書き換えモード
      if ($argv[$i] == "-index") $EDIT_INDEX = true;

      // 画像用ディレクトリの作成
      if($argv[$i] == "-img") {
        $img_dir = "../works/img/".$work_code;
        if(!file_exists($img_dir)) {
          mkdir($img_dir);
          echo " Done : make directory : ".$img_dir."\n";
        } else {
          echo " Directory exists : ".$img_dir."\n";
        }
      }

      // 日付の指定
      if(strpos($argv[$i], ".") !== false) $date = $argv[$i];

      // 枠線ありか否か
      if(strpos($argv[$i], "border") !== false) $border = ' border="1"';
    }

    // indexの書き換え
    if($EDIT_INDEX) index_update($argv, $argc, $date, $border);
    break;
}
exit();
?>
