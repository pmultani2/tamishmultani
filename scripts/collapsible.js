const coll = document.getElementsByClassName("collapsible-btn");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    console.log("click");
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}