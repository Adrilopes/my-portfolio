const buttonTopo = document.getElementById("buttonTopo");

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    buttonTopo.style.display = "block";
  } else {
    buttonTopo.style.display = "none";
  }
};

buttonTopo.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
