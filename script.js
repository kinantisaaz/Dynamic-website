var slides = 1;
showSlides(slides);

function goSlides(n) {
  showSlides((slides += n));
}

function currentSlide(n) {
  showSlides((slides = n));
}

function showSlides(n) {
  var i;
  var slide = document.getElementsByClassName("slidesProduct");
  var dot = document.getElementsByClassName("point");
  if (n > slide.length) {
    slides = 1;
  }
  if (n < 1) {
    slides = slide.length;
  }
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  slide[slides - 1].style.display = "block";
  dot[slides - 1].className += " active";
}
