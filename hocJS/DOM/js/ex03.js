var content = document.querySelector('.content');

console.log(content.innerHTML);

console.log(content.innerText);

console.log(content.textContent);

console.log(content.outerHTML);

console.log(content.outerText);

// content.innerText = `<h2>Hoang An</h2>`;

// content.outerText = `<h2>Hoang An</h2>`

// var value = document.querySelector("h1");
// var numCount = document.querySelector("span");
// var btnIn = document.querySelector(".increase");
// var btnDe = document.querySelector(".decrease");

// btnIn.addEventListener("click", function () {
//   var num = numCount.innerText;
//   num++;
//   numCount.innerText = num;
// });
// btnDe.addEventListener("click", function () {
//   var num = numCount.innerText;
//   if (+num > 0) {
//     num--;
//     numCount.innerText = num;
//   }
// });
