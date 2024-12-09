import {
  animate,
  inView,
  stagger,
} from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";
import clauserJenisTumbuhan from "./animateJenis.js";
import animasiNav from "./nav.js";

document.addEventListener("DOMContentLoaded", () => {
  const words = ["Nurture", "Expand", "Grow"];
  changeWord(words);
  cloneKalimat();

  // Animasi navigasi
  animasiNav();

  // Event untuk frame video
  eventFrameVide();

  // Animasi count pada section informasi
  countPersentasePunah();

  // Animasi Kutipan Dengan GSAP
  animasiKutipanWithGsap();

  // Animasi clouser jenis-jenis Tumbuhan
  clauserJenisTumbuhan();

  // Animasi carousel artikel
  animateToArtikel();

  // Function untuk handle order ke whatsApp
  orderToWhatsapp();

  animateToALLElement();
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
      rootMargin: "200px",
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

// function untuk membuat animasi carousel artikel
function animateToArtikel() {
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const carouselCards = document.querySelector(".carousel-card");
  const cards = document.querySelectorAll(".card-artikel");

  let currentIndex = 0;

  function updateButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === cards.length - 1;
  }

  function moveCarousel() {
    if (currentIndex <= cards.length) {
      const offset = -currentIndex * cards[0].offsetWidth;
      carouselCards.style.transform = `translateX(${offset}px)`;
    }
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      moveCarousel();
      updateButtons();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - 2) {
      currentIndex++;
      moveCarousel();
      updateButtons();
    }
  });

  updateButtons();
}

function orderToWhatsapp() {
  const btnShop = document.querySelectorAll(".btnShop");
  const isLogin = sessionStorage.getItem("isLogin");
  btnShop.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (isLogin) {
        btn.setAttribute("href", "https://wa.me/62895323382357");
      } else {
        window.location.href = "../../pages/login.html";
      }
    });
  });
}

function animateToALLElement() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".card-produk", {
    scrollTrigger: {
      trigger: ".card-produk",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: -100,
    duration: 1.5,
    stagger: 0.1,
  });

  gsap.from(".hero-shop", {
    scrollTrigger: {
      trigger: ".hero-shop",
      start: "top 100%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    duration: 1.5,
  });
}
