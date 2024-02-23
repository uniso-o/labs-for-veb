document.addEventListener("DOMContentLoaded", function(event) { 
    let images = [
      {src: "pictures/image1.jpg", name: "Картинка 1"},
      {src: "pictures/image2.jpg", name: "Картинка 2"},
      {src: "pictures/image3.jpg", name: "Картинка 3"},
      {src: "pictures/image4.jpg", name: "Картинка 4"},
      {src: "pictures/image5.jpg", name: "Картинка 5"}
    ];
  
    let currentIndex = 0;
    let figure = document.getElementById("figure");
    let image = figure.getElementsByTagName("img")[0];
    let caption = figure.getElementsByTagName("figcaption")[0];
  
    let changeImage = function() {
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
  
      image.src = images[currentIndex].src;
      caption.textContent = images[currentIndex].name;
    }
  
    figure.addEventListener("click", function() {
      changeImage();
    });

    image.src = images[currentIndex].src;
    caption.textContent = images[currentIndex].name;
  });



  let currentIndex = 0;
  let slides = document.querySelectorAll('.slide');
  let slideInterval = 3000;
   
  function changeSlide() {
    slides[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.opacity = 1;
  }
   
  setInterval(changeSlide, slideInterval);