<?php
// マークダウンから変換
require_once("./Michelf/Markdown.inc.php");
use Michelf\Markdown;


// オリジナルのタグに変換する
function convert_orginal_tag ($html) {
  // 空行は<br>に変換
  if ($html == "\n") return "<br>\n";

  //マークダウン記法からHTMLへ変換
  $html = markdown::defaultTransform($html);

  // <p>タグを削除、</p>タグを<br>に変換
  $html = str_replace("<p>", "", $html);
  $html = str_replace("</p>", "<br>", $html);

  // Youtubeのリンクを成形
  if(strpos($html, "youtu") !== false) {
    // 改行文字を削除
    $html = str_replace("\n", "", $html);
    // htmlタグを削除
    $html = strip_tags($html);
    // Youtubeのリンクを成形
    $str = explode("/", $html);
    $html = '<div style="margin-bottom:20px;">'."\n".'<iframe class="mov_size" src="https://www.youtube.com/embed/'.$str[count($str)-1].'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'."\n".'</div>'."\n";
  }

  return $html;
}

// ファイル名がないとき
if (count($argv) == 1) {
  echo "Error : please input file name!\n";
  echo "1:filename 2:date\n";
  exit();
}



// htmlのテンプレート読み込み
$buf = file_get_contents("template.txt");
$html_template = explode("{md}", $buf);

// markdownファイル読み込み
$handle = fopen($argv[1], "r");
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

// 書き出すファイル名を生成
$tmp = explode("/", $argv[1]);
$tmp = explode(".", $tmp[count($tmp)-1]);
$out_file_name = "../".$tmp[0].".html";

// 画像があれば追加
$img_file_path = glob("../img/".$tmp[0]."/*");
if (count($img_file_path) > 0) $html .= "<hr>\n";
for ($i=0; $i < count($img_file_path); $i++) {
  $img_file = explode("/",$img_file_path[$i]);
  $html .= '<p><img class="img_size" src="./img/'.$tmp[0]."/".$img_file[count($img_file)-1].'"></p>'."\n";
}

// ファイルに書き込む内容を整形
$out_html = $html_template[0].$title.$html_template[1].$html.$html_template[2];

// ファイル書き出し
file_put_contents($out_file_name, $out_html);


if ($argv[3] == "-index") {
  // indexの書き換え
  $date = $argv[2];
  // 書き出すファイル名を生成
  $tmp = explode("/", $argv[1]);
  $tmp = explode(".", $tmp[count($tmp)-1]);

  // ファイル読み込み
  $in_index_html = file_get_contents("../index.html");
  $add_html = '<!-- new -->'."\n".'<div class=figure>'."\n".'<a class="linkGallery" href="./'.$tmp[0].'.html">'."\n".'<img src="./img/index/'.$tmp[0].'.png" class="works_img_size" >'."\n".'<p class="caption">'.$title.'<br>'.$date.'</p>'."\n".'</a>'."\n".'</div>';

  $out_index_html = str_replace("<!-- new -->", $add_html, $in_index_html);

  // ファイル書き出し
  file_put_contents("../index.html", $out_index_html);
}
exit();
?>
