function play() {
  var audio = new Audio("./media/music/chime.mp3");
  audio.play();
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded..!!");

  const typingEffect = document.querySelector(".main__typingText");

  const typingText = [
    "Engineer Software",
	"Develop Software",
    "am a Student",
    "am a Tech Geek",
    "play Football",
  ];
  const typingDelay = 200;
  const eraseDelay = 150;
  const newTextDelay = 2000;
  let idx = 0;
  let charIdx = 0;

  type();

  function type() {
    if (charIdx < typingText[idx].length) {
      typingEffect.textContent += typingText[idx].charAt(charIdx);
      charIdx++;

      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIdx > 0) {
      typingEffect.textContent = typingText[idx].substring(0, charIdx - 1);
      charIdx--;
      setTimeout(erase, eraseDelay);
    } else {
      idx++;
      if (idx >= typingText.length) idx = 0;

      setTimeout(type, typingDelay);
    }
  }

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
  };

  const tabs = document.querySelector(".experience__tabs");

  tabs.addEventListener("click", (e) => handleClick(e));

  function handleClick(e) {
    const target = e.target;
    const tabNum = target.dataset.tab;
    const activeTab = document.querySelector(".experience__tabs .active");
    const activeContent = document.querySelector(
      ".experience__content .visible"
    );
    const currentContent = document.querySelector(
      `.experience__content__section[data-tab='${tabNum}']`
    );

    if (!tabNum) {
      return;
    }

    activeTab.classList.remove("active");
    target.classList.add("active");
    activeContent.classList.remove("visible");
    currentContent.classList.add("visible");
  }
});
