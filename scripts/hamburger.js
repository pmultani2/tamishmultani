const hamburgerBtn = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");
const overlayNav = overlay.firstElementChild;

hamburgerBtn.onclick = function() {
  if (overlay.style.opacity != "1") {
    document.body.style.overflow = "hidden";
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";
    overlayNav.style.transform = "translate(0, -15px)";
    hamburgerBtn.innerHTML = "<i class='fa-solid fa-x fa-xl' style='color: #000000;'></i>"
  } else {
    document.body.style.overflow = "initial";
    overlay.style.visibility = "hidden";
    overlayNav.style.transform = "translate(0, 15px)";
    overlay.style.opacity = "0";
    hamburgerBtn.innerHTML = "<i class='fa-solid fa-bars fa-xl' style='color: #000000;'></i>"
  }
};

const screenSize = window.matchMedia("(max-width: 800px)");
screenSize.addEventListener("change", () => {
    if (!screenSize.matches) {
      overlayNav.style.transform = "translate(0, 15px)";
      overlay.style.visibility = "hidden";
      overlay.style.opacity = "0";
      document.body.style.overflow = "initial";
      hamburgerBtn.innerHTML = "<i class='fa-solid fa-bars fa-xl' style='color: #000000;'></i>"
    }
  }
);



