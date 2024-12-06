import {
  animate,
  scroll,
} from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";

document.addEventListener("DOMContentLoaded", () => {
  const words = ["Nurture", "Expand", "Grow"];
  changeWord(words);
  cloneKalimat();

  // Event untuk frame video
  eventFrameVide();
});

// funtion untuk menduplikat kalimat yang terdapat animasi scrolling horizontal
function cloneKalimat() {
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 5; j++) {
      const copy = document
        .querySelector(`.kalimat-slide-${i}`)
        .cloneNode(true);
      document.querySelector(`.kalimat-${i}`).appendChild(copy);
    }
  }
}

// Function untuk membuat animasi perubahan kata
function changeWord(words) {
  const word = document.querySelector(".kata");
  let index = 0;

  setInterval(() => {
    word.textContent = words[index];
    animate(
      ".kata",
      { opacity: [0, 1], y: ["-20px", "0px"] },
      { duration: 0.3 }
    );

    // Update Index
    index = (index + 1) % words.length;
  }, 2000);
}

function eventFrameVide() {
  const btnPlay = document.getElementById("btn-play");
  btnPlay.addEventListener("click", () => {
    const containerFrame = document.querySelector(".container-frame");
    const btnClose = document.querySelector(".btn-close");
    containerFrame.classList.remove("hidden");
    containerFrame.classList.add("frame-active");

    btnClose.addEventListener("click", () => {
      if (containerFrame.classList.contains("frame-active")) {
        containerFrame.classList.remove("frame-active");
        containerFrame.classList.add("hidden");
      }
    });
  });
}
