const clauserJenisTumbuhan = () => {
  const items = document.querySelectorAll(".item");

  const expand = (item, i) => {
    const overlay = item.children[0];
    const judul = item.children[1];

    items.forEach((it, ind) => {
      if (i === ind) return;
      it.dataset.clicked = "false";
      gsap.to(it, { width: "10vw", duration: 2, ease: "elastic(1, 0.6)" });
      gsap.to(it.children[0], { opacity: 0, duration: 1.5 }); // Reset overlay
      gsap.to(it.children[1], { opacity: 0, duration: 1.5 }); // Reset judul
    });

    const isClicked = item.dataset.clicked === "true";
    item.dataset.clicked = isClicked ? "false" : "true";

    // Animasi untuk item yang sedang diklik
    gsap.to(item, {
      width: isClicked ? "10vw" : "25vw",
      duration: 2.5,
      ease: "elastic(1, 0.3)",
    });

    // Animasi overlay
    gsap.to(overlay, {
      opacity: isClicked ? 1 : 0,
      duration: 2.5,
      ease: "elastic(1, 0.3)",
    });

    // Animasi judul
    gsap.to(judul, {
      opacity: isClicked ? 0 : 1,
      duration: 2.5,
      ease: "elastic(1, 0.3)",
    });
  };

  items.forEach((item, index) => {
    item.dataset.clicked = "false";
    item.addEventListener("click", () => {
      expand(item, index);
    });
  });
};

export default clauserJenisTumbuhan;
