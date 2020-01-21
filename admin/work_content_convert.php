<?php
/*
 * worksの記事を更新する
 */
require_once("./Michelf/Markdown.inc.php");
use Michelf\Markdown;

function work_content_convert ($argv, $argc) {
  global $border;
  global $date;
  global $title;
  global $work_code;

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
  $out_file_name = "../works/".$work_code.".html";

  // 画像があれば追加
  $img_file_path = glob("../works/img/".$work_code."/*");
  if (count($img_file_path) > 0) $html .= "<hr>\n";
  for ($i=0; $i < count($img_file_path); $i++) {
    $img_file = explode("/",$img_file_path[$i]);
    $html .= '<p><img class="img_size" src="./img/'.$work_code."/".$img_file[count($img_file)-1].'"></p>'."\n";
  }

  // ファイルに書き込む内容を整形
  $out_html = $html_template[0].$title.$html_template[1].$html.$html_template[2];

  // ファイル書き出し
  if( file_put_contents($out_file_name, $out_html) ){
    echo " Done : convert html : ".$out_file_name."\n";
  }
}


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
  if(strpos($html, "youtu") !== false && strpos($html, "channel") === false) {
    // 改行文字を削除
    $html = str_replace("\n", "", $html);
    // htmlタグを削除
    $html = strip_tags($html);
    // Youtubeのリンクを成形
    // IDを取得
    $str = explode("/", $html);
    $video_id = $str[count($str)-1];
    // 再生リストだった場合の処理
    $video_id = str_replace("playlist", "videoseries", $video_id);
    // html形式に変換
    $html = <<<EOF
    <div style="margin-bottom:20px;">
      <iframe class="mov_size" src="https://www.youtube.com/embed/{$video_id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
EOF;
    // $html = '<div style="margin-bottom:20px;">'."\n".'<iframe class="mov_size" src="https://www.youtube.com/embed/'.$video_id.'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'."\n".'</div>'."\n";
  }

  // メールのリンクを成形
  // {contact=mail}[表示](リンク)
  if (strpos($html, "{contact=") !== false) {

    // "{contact="を削除
    $html = str_replace("{contact=", "", $html);
    $html = str_replace("<br>", "", $html);
    $html = str_replace("\n", "", $html);

    //メディアが何か判別
    $buf = explode("}", $html);
    $html = $buf[1];
    $media = $buf[0];

    // メールの時はメール用にリンクを成形
    if($media == "mail") $html = str_replace("href=\"", "href=\"mailto:", $html);

    // htmlに成形
    $html = <<< EOF
    <div class="contact">
      <img class="logo_img" src="./img/logos/{$media}_logo.png">
      {$html}
    </div>\n\n
EOF;
  }


  return $html;
}
?>
