function play() {
  var audio = new Audio("./media/music/chime.mp3");
  audio.play();
}

document.addEventListener("DOMContentLoaded", () => {
//   console.log("DOM Loaded..!!");

  const btnHamburger = document.querySelector("#btnHamburger");
  const body = document.querySelector("body");
  const header = document.querySelector(".header");
  const footer = document.querySelector(".footer");
  const fadeElements = document.querySelectorAll(".has-fade");

  btnHamburger.onclick = () => {
    if (header.classList.contains("open")) {
      header.classList.remove("open");
      body.classList.remove("no-scroll");
      fadeElements.forEach((element) => {
        element.classList.remove("fade-in");
        element.classList.add("fade-out");
      });

      footer.classList.remove("fixed-bottom");
    } else {
      header.classList.add("open");
      body.classList.add("no-scroll");
      fadeElements.forEach((element) => {
        element.classList.remove("fade-out");
        element.classList.add("fade-in");
      });

      footer.classList.add("fixed-bottom");
    }

    if (document.title == "Experience | Priyansh Bordia") {
      const experience = document.querySelector(".experience");

      if (experience.style.opacity == "0") {
        experience.style.opacity = "1";
      } else {
        experience.style.opacity = "0";
      }
    }
  };

  const footer__grid__text = document.querySelector(
    ".footer__grid__text .has-hover"
  );
//   console.log(footer__grid__text);
  footer__grid__text.innerHTML =
    "Created by Priyansh Bordia &copy; 2020-" + new Date().getFullYear();
});
