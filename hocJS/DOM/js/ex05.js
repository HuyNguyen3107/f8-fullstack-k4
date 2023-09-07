// var title = document.querySelector(".title");
// console.log(title);

// // console.log(title.className);
// console.log(title.classList);

// title.classList.add('title5', 'title6');

// title.classList.remove("title6");

// console.log(title.classList.contains('title'));

// title.classList.toggle("title5")
// title.classList.toggle("title5")

var content = document.querySelector(".content");
var btn = document.querySelector(".btn");
var textContent = content.innerText;

btn.addEventListener("click", function () {
    if (content.innerText !== "") {
        content.innerText = "";
        btn.innerText = "Appearance";
    } else if (content.innerText === "") {
        content.innerText = textContent;
        btn.innerText = "Disappearance";
    }
})