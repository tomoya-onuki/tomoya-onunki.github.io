<?php
/*
 * worksのindexページを更新する
 */

require_once("./Michelf/Markdown.inc.php");
use Michelf\Markdown;

function index_update($argv, $argc) {
  global $border;
  global $date;
  global $title;
  global $work_code;

  // ファイル読み込み
  $in_index_html = file_get_contents("../works/index.html");
  $add_html = '<!-- new -->'."\n".'<div class=figure>'."\n".'<a class="linkGallery  no_link_decoration" href="./'.$work_code.'">'."\n".'<img'.$border.' src="./img/index/'.$work_code.'.png" class="works_img_size" >'."\n".'<p class="caption">'.$title.'<br>'.$date.'</p>'."\n".'</a>'."\n".'</div>'."\n";

  $out_index_html = str_replace("<!-- new -->", $add_html, $in_index_html);

  // ファイル書き出し
  if(file_put_contents("../works/index.html", $out_index_html) ){
    echo " Done : add link to index.html\n";
  }
}
?>
