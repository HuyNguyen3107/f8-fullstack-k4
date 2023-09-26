// window.addEventListener('scroll', function() {
//     var x = window.scrollX;
//     var y = window.scrollY;
//     console.log(x,y);
// })

var gotoBtn = document.querySelector('.goto');
var topBtn = document.querySelector('.top');
var title = document.querySelector('.title');
var menu = document.querySelector('.menu');
var main = document.querySelector('.main');

var titleHeight = title.clientHeight;
var menuHeight = menu.clientHeight;

gotoBtn.addEventListener('click', function () {
    window.scroll({
        top: document.body.clientHeight,
        left: 0,
    });
});
window.addEventListener('scroll', function () {
    if (window.scrollY >= titleHeight) {
        topBtn.style.display = 'block';
        menu.classList.add('fixed');
        document.body.style.paddingTop = `${menuHeight}px`;
    } else {
        topBtn.style.display = 'none';
        menu.classList.remove('fixed');
        document.body.style.paddingTop = ``;
    }
})

topBtn.addEventListener('click', function () {
    window.scroll({
        top: 0,
        left: 0,
    });
})