const animasiNav = () => {
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("navbar-fixed", window.scrollY > header.offsetTop);
  });

  const humberger = document.querySelector("#humberger");
  const navItem = document.getElementById("nav-item");

  humberger.addEventListener("click", () => {
    humberger.classList.toggle("humberger-active");
    navItem.classList.toggle("hidden");
  });
};

export default animasiNav;
