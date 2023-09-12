var btn = document.querySelector('.btn');
var overlay = document.querySelector('.overlay');
var closeBtn = document.querySelector('.close');
var modalBox = document.querySelector('.modal-box');
var modal =document.querySelector('.modal');

btn.addEventListener('click', function () {
    modalBox.classList.add('show');
    modal.classList.add('effect');
})

closeBtn.addEventListener('click', function () {
    modalBox.classList.remove('show');
    modal.classList.remove('effect');
})

overlay.removeEventListener ('click', function () {
    modalBox.classList.remove('show');
    modal.classList.remove('effect');
})
