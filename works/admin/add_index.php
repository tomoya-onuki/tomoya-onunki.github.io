
<?php
// markdownファイル読み込み
$handle = fopen($argv[1], "r");
// タイトルを取得
$title = str_replace("#", "", fgets($handle));
fclose($handle);


// indexの書き換え
$date = $argv[2];
// 書き出すファイル名を生成
$tmp = explode("/", $argv[1]);
$tmp = explode(".", $tmp[count($tmp)-1]);

// ファイル読み込み
$in_index_html = file_get_contents("../index.html");
$add_html = '<!-- new -->'."\n".'<div class=figure>'."\n".'<a class="linkGallery" href="./'.$tmp[0].'.html">'."\n".'<img src="../img/index/'.$tmp[0].'.png" class="works_img_size" >'."\n".'<p class="caption">'.$title.'<br>'.$date.'</p>'."\n".'</a>'."\n".'</div>';

$out_index_html = str_replace("<!-- new -->", $add_html, $in_index_html);

// ファイル書き出し
file_put_contents("../index.html", $out_index_html);
exit();
?>
