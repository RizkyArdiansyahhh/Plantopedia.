import {
  animate,
  scroll,
  inView,
} from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";

document.addEventListener("DOMContentLoaded", () => {
  const words = ["Nurture", "Expand", "Grow"];
  changeWord(words);
  cloneKalimat();

  // Event untuk frame video
  eventFrameVide();

  // Animasi count pada section informasi
  countPersentasePunah();

  // Animasi Kutipan Dengan GSAP
  animasiKutipanWithGsap();
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
  const btnPlay = document.querySelectorAll(".btn-play-video");

  btnPlay.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      let containerFrame;
      if (index === 0) {
        containerFrame = document.querySelector(".container-frame-1");
      } else if (index === 1) {
        containerFrame = document.querySelector(".container-frame-2");
      }

      containerFrame.classList.remove("hidden");
      containerFrame.classList.add("frame-active");

      const btnClose = containerFrame.querySelector(".btn-close");

      btnClose.addEventListener(
        "click",
        () => {
          containerFrame.classList.remove("frame-active");
          containerFrame.classList.add("hidden");
        },
        { once: true }
      );
    });
  });
}

// Function animasi count pada section informasi
function countPersentasePunah() {
  inView("#persentase-punah", () => {
    setTimeout(() => {
      const persentasePunah = document.querySelector("#persentase-punah");
      const target = 26276;
      let currennt = 20000;
      const interval = setInterval(() => {
        persentasePunah.textContent = currennt;
        currennt += 12;
        if (currennt > target) {
          clearInterval(interval);
        }
      }, 1);
    }, 1000);
  });

  const linkPunah = document.querySelector(".link-punah");
  linkPunah.addEventListener("click", () => {
    window.open(
      "https://dataindonesia.id/varia/detail/data-jumlah-spesies-tumbuhan-yang-terancam-punah-di-dunia-pada-2023",
      "_blank"
    );
  });
}

// Animasi kutipan dengan bantuan GSAP
function animasiKutipanWithGsap() {
  const kutipanElement = document.getElementById("kutipan");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("kutipan-active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.29,
    }
  );

  observer.observe(kutipanElement);

  // Animasi GSAP
  gsap.registerPlugin(ScrollTrigger);
  const kutipan = document.querySelectorAll(".kutipan");
  kutipan.forEach((el) => {
    const text = new SplitType(el, { types: "chars" });

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      opacity: 0.2,
      y: 20,
      stagger: 0.1,
    });
  });
}
