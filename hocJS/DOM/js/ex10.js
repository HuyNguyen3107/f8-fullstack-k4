var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");
var carouselItems = carouselInner.children;

var carouselNextBtn = carousel.querySelector(".next");
var carouselPrevBtn = carousel.querySelector(".prev");

var itemWidth = carouselInner.clientWidth;

var totalWidth = carouselItems.length * itemWidth;
carouselInner.style.width = `${totalWidth}px`;

var position = 0;

carouselNextBtn.addEventListener("click", function () {
  if (Math.abs(position) < totalWidth - itemWidth) {
    position -= itemWidth;
    carouselInner.style.translate = `${position}px`;
  }
});

carouselPrevBtn.addEventListener("click", function () {
  if (Math.abs(position) > 0) {
    position += itemWidth;
    carouselInner.style.translate = `${position}px`;
  }
});
