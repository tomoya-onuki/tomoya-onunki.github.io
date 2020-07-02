function visibleVideo(){
  document.getElementById("top").style.display ="none";
  document.getElementById("video").style.display ="block";
  document.getElementById("art").style.display ="none";
  document.getElementById("application").style.display ="none";

  // document.getElementById("videoBtn").style.opacity="1.0";
  document.getElementById("videoBtn").style.background="linear-gradient(transparent 50%, #ffff66 50%)";
  document.getElementById("artBtn").style.background="none";
  document.getElementById("appBtn").style.background="none";
  document.getElementById("recBtn").style.background="none";
}
function visibleArt(){
  document.getElementById("top").style.display ="none";
  document.getElementById("video").style.display ="none";
  document.getElementById("art").style.display ="block";
  document.getElementById("application").style.display ="none";

  // document.getElementById("artBtn").style.opacity="1.0";
  document.getElementById("videoBtn").style.background="none";
  document.getElementById("artBtn").style.background="linear-gradient(transparent 50%, #ffff66 50%)";
  document.getElementById("appBtn").style.background="none";
  document.getElementById("recBtn").style.background="none";
}
function visibleApp(){
  document.getElementById("top").style.display ="none";
  document.getElementById("video").style.display ="none";
  document.getElementById("art").style.display ="none";
  document.getElementById("application").style.display ="block";

  // document.getElementById("appBtn").style.opacity="1.0";
  document.getElementById("videoBtn").style.background="none";
  document.getElementById("artBtn").style.background="none";
  document.getElementById("appBtn").style.background="linear-gradient(transparent 50%, #ffff66 50%)";
  document.getElementById("recBtn").style.background="none";
}
function visibleRecommend(){
  document.getElementById("top").style.display ="block";
  document.getElementById("video").style.display ="none";
  document.getElementById("art").style.display ="none";
  document.getElementById("application").style.display ="none";

  // document.getElementById("recBtn").style.opacity="1.0";
  document.getElementById("videoBtn").style.background="none";
  document.getElementById("artBtn").style.background="none";
  document.getElementById("appBtn").style.background="none";
  document.getElementById("recBtn").style.background="linear-gradient(transparent 50%, #ffff66 50%)";
}
