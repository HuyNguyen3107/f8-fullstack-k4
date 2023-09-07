var img = document.querySelector("img");
console.log(img.src);
console.log(img.title);
console.log(img.alt);
console.log(img.width);
console.log(img.height);
img.src = "https://picsum.photos/300/600"

console.log(img.getAttribute("data-count"));
img.setAttribute('data-count', 10);

img.dataset.numberIndex = '2';

img.removeAttribute('data-count');

console.log(img.dataset.count);
console.log(img.dataset.numberIndex);

img.remove();
