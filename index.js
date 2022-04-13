@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

var imgIndex = 1;
var timer = null;
showImg(imgIndex);

function changeImage(n) {
  clearTimeout(timer);
  showImg(imgIndex += n);
}

function currentSlide(n) {
  clearTimeout(timer);
  showImg(imgIndex = n);
}

function showImg(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n==undefined){n = ++imgIndex}
  if (n > slides.length) {imgIndex = 1}
  if (n < 1) {imgIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[imgIndex-1].style.display = "block";

//   Image changes automatically in 5 seconds
  timer = setTimeout(showImg, 5000);
}