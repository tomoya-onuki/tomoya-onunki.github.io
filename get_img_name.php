<?php
$result = glob('./img/index/*');
$jsArray = "var fname = [";
foreach ($result as $fname ) {
  // array_push($array, '"'.$fname.'"');
  $jsArray .= '"'.$fname.'",';
}
$jsArray .= "];\n";
$jsArray2 = str_replace('""', '", "', $jsArray);


$ctx2 = <<<EOD
var max = fname.length;
var delta = 1;
var count = Math.floor(Math.random() * max);
imgTimer();

function imgTimer() {
  document.image_place.src = fname[count];
  count += delta;
  if (count >= max) {
    delta = Math.floor(Math.random() * 5);
    count = 0;
  }
  console.log(delta);
  setTimeout("imgTimer()",8000);
}
EOD;


$f = fopen("./js/index_img.js", "w");
fwrite($f, $jsArray2.$ctx2);
fclose($f);
?>
