function changeStyle() {
  let st1 = document.getElementById("st1");
  let st2 = document.getElementById("st2");

  if (st1.disabled) {
    st1.disabled = false;
    st2.disabled = true;
  } else {
    st1.disabled = true;
    st2.disabled = false;
  }
}
function reduceOpacity() {
  let sp = document.querySelectorAll("li span");

  for (let i = 0; i < sp.length; i++) {
    let opacity = parseFloat(sp[i].style.opacity);
    opacity -= 0.1;

    if (opacity  < 0) {
      opacity = 1;
    }
    sp[i].style.opacity = opacity;  }
  }


  document.addEventListener("DOMContentLoaded", function(event) { 
    let dropdowns = document.getElementsByClassName("dropdown");
  
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let dropdownContent = this.getElementsByClassName("dropdown-content")[0];
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  });