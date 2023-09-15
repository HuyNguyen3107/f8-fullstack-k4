// var title = document.querySelector(".title");
// var menu = document.querySelectorAll(".menu");

// console.log(title.parentElement);

// console.log(title.parentElement.parentElement);

// console.log(menu.children[1].children[1].children[0].innerText);

// var menuList = document.querySelectorAll("li");

// menuList.forEach(function (item) {
//   if (item.children.length === 2) {
//     item.classList.add("has-children");
//   }
// });

var menuList = document.querySelectorAll("li");
menuList.forEach(function (item) {
  if (item.children.length === 2) {
    var comp = item;
    item.classList.add("has-children");
    var temp = document.createElement("span");
    temp.innerHTML = `<i class="fa-solid fa-caret-down white-color"></i>`;
    item.children[0].appendChild(temp);
    item.addEventListener("click", function () {
      temp.classList.toggle("rotate");
      item.children[1].classList.toggle("show");
      menuList.forEach(function (menuItem) {
        if (comp !== menuItem && menuItem.classList.contains("has-children")) {
          if (menuItem.children[1].classList.contains("show")) {
            menuItem.children[1].classList.remove("show");
            if (menuItem.children[0].children[0].classList.contains("rotate")) {
              menuItem.children[0].children[0].classList.remove("rotate");
            }
          }
        }
      });
    });
  }
});

var active = document.querySelector('.lists .active');
var next = active.nextElementSibling;
var last = document.querySelector('.last');
var prev = last.previousElementSibling;
var lists = document.querySelector('.lists');
var first = lists.firstElementChild;
var last2 = lists.lastElementChild;
console.log(prev);
console.log(next);
console.log(first);
console.log(last2);
