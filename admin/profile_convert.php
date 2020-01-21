<?php
/*
 * プロフィールページを更新する
 */
require_once("./Michelf/Markdown.inc.php");
use Michelf\Markdown;


function profile_convert() {
  global $border;
  global $date;
  global $title;
  global $work_code;
  
  // profile.htmlを読み込む
  $buf = file_get_contents("../profile.html");
  $profile_template = explode("<!-- md -->", $buf);

  // profle.txtを読み込む
  $handle = fopen("./markdown/profile.txt", "r");
  // 成形後のmarkdown用の変数
  $html = "";
  // ファイル内容を出力
  for ($i = 0; $line = fgets($handle); $i++) {
    // タイトルを取得
    if($i == 0) $title = str_replace("#", "", $line);
    // markdownをhtmlへ変換
    $html .= convert_orginal_tag($line);
  }
  fclose($handle);

  $out_html = $profile_template[0]."<!-- md -->\n".$html."<!-- md -->".$profile_template[2];
  // ファイル書き出し
  if( file_put_contents("../profile.html", $out_html) ){
    echo " Done : convert html : profile.html\n";
  }
}
?>
