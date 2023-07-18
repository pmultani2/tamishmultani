const hamburgerBtn = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");

hamburgerBtn.onclick = function() {
  if (overlay.style.height != "100%") {
    document.body.style.overflow = "hidden";
    overlay.style.height = "100%";
    hamburgerBtn.innerHTML = "<i class='fa-solid fa-x fa-xl' style='color: #000000;'></i>"
  } else {
    document.body.style.overflow = "initial";
    overlay.style.height = "0%";
    hamburgerBtn.innerHTML = "<i class='fa-solid fa-bars fa-xl' style='color: #000000;'></i>"
  }
};

const screenSize = window.matchMedia("(max-width: 800px)");
screenSize.addEventListener("change", () => {
    if (!screenSize.matches) {
      overlay.style.height = "0%";
      document.body.style.overflow = "initial";
      hamburgerBtn.innerHTML = "<i class='fa-solid fa-bars fa-xl' style='color: #000000;'></i>"
    }
  }
);



