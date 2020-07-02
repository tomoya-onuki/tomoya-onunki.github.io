function visibleVideo(){
  document.getElementById("top").style.display ="none";
  document.getElementById("video").style.display ="block";
  document.getElementById("art").style.display ="none";
  document.getElementById("application").style.display ="none";

  document.getElementById("videoBtn").style.borderBottom ="solid 1px";
  document.getElementById("artBtn").style.borderBottom ="hidden";
  document.getElementById("appBtn").style.borderBottom ="hidden";
  document.getElementById("videoBtn").style.color ="#000000";
  // document.getElementById("artBtn").style.color ="#1f1f1f";
  // document.getElementById("appBtn").style.color ="#1f1f1f";
}
function visibleArt(){
  document.getElementById("top").style.display ="none";
  document.getElementById("video").style.display ="none";
  document.getElementById("art").style.display ="block";
  document.getElementById("application").style.display ="none";

  document.getElementById("videoBtn").style.borderBottom ="hidden";
  document.getElementById("artBtn").style.borderBottom ="solid 1px";
  document.getElementById("appBtn").style.borderBottom ="hidden";
  // document.getElementById("videoBtn").style.color ="#1f1f1f";
  document.getElementById("artBtn").style.color ="#000000";
  // document.getElementById("appBtn").style.color ="#1f1f1f";
}
function visibleApp(){
  document.getElementById("top").style.display ="none";
  document.getElementById("video").style.display ="none";
  document.getElementById("art").style.display ="none";
  document.getElementById("application").style.display ="block";

  document.getElementById("videoBtn").style.borderBottom ="hidden";
  document.getElementById("artBtn").style.borderBottom ="none";
  document.getElementById("appBtn").style.borderBottom ="solid 1px";
  // document.getElementById("videoBtn").style.color ="#1f1f1f";
  // document.getElementById("artBtn").style.color ="#1f1f1f";
  document.getElementById("appBtn").style.color ="#000000";
}
function worksBtn() {
  // document.getElementById("works").style.borderButton ="solid 1px";
  // document.getElementById("about").style.borderButton ="hidden";
  // document.getElementById("works").style.color ="#F43E43";
  // document.getElementById("about").style.color ="#1f1f1f";
}
function aboutBtn() {
  // document.getElementById("works").style.borderButton ="hidden";
  // document.getElementById("about").style.borderButton ="solid 1px";
  // document.getElementById("works").style.color ="#1f1f1f";
  // document.getElementById("about").style.color ="#F43E43";
}
