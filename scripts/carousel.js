const btnLeft = document.getElementsByClassName("carousel-left-btn")
const btnRight = document.getElementsByClassName("carousel-right-btn")
const carousel = document.getElementsByClassName("carousel-elements-wrapper")

for (let i = 0; i < carousel.length; i ++) {
  carousel[i].style.width = carousel[i].offsetWidth + 'px';
  let scrollAmount = carousel[i].offsetWidth;

  btnLeft[i].onclick = function() {
    btnLeft[i].disabled = true;
    carousel[i].scrollLeft -= scrollAmount;
    setTimeout(function() {
      btnLeft[i].disabled = false;
    }, 750);
  };

  btnRight[i].onclick = function() {
    btnRight[i].disabled = true;
    carousel[i].scrollLeft += scrollAmount;
    setTimeout(function() {
      btnRight[i].disabled = false;
    }, 750);
  }; 
}


