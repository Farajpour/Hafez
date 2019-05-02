
// Function for Responsive Header Menu
function mobileNav() {
    document.getElementById("toggleClick").style.display = "block";
    document.getElementById("nav-event").style.display = "block";
}

function navEvent() {
    document.getElementById("nav-event").style.display = "none";
    document.getElementById("toggleClick").style.display = "none";
}

$(window).resize(function () {
    if ($(window).width() >= 980) {
        document.getElementById("toggleClick").style.display = "block";
    }else if ($(window).width() <= 980) {
        document.getElementById("toggleClick").style.display = "none";
    }
});



var slideIndex = 0;
showSlides();



function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 10000); // Change image every 8 seconds
}