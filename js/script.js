function play() {
  var audio = new Audio("./media/music/chime.mp3");
  audio.play();
}

document.addEventListener("DOMContentLoaded", () => {
  const footer__grid__text = document.querySelector(
    ".footer__grid__text .has-hover"
  );
  footer__grid__text.innerHTML =
    "Priyansh Bordia &copy; 2020-" + new Date().getFullYear();
});
