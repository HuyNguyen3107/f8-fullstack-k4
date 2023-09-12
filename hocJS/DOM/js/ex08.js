// var btn = document.querySelector('.btn');

// var isDrag = false;
// var offSetX, offSetY;

// btn.addEventListener('mousedown', function (e) {
//     if (e.which === 1) {
//         isDrag = true;
//         offSetX = e.offsetX;
//         offSetY = e.offsetY;
//     }
// })


// document.addEventListener('mousemove', function (e) {
//     if (isDrag) {
//         console.log(e.clientX - offSetX);
//         console.log(offSetY);
//         var css = {
//             position: 'relative',
//             top: `${e.clientY - offSetY - 10}px`,
//             left: `${e.clientX - offSetX - 10}px`,
//         };
//         Object.assign(btn.style, css);
//     }
// })

// document.addEventListener('mouseup', function (e) {
//     isDrag = false;
// })

var link = document.querySelector('a');
link.addEventListener('click', function (e) {
    console.log(this.href);
    e.preventDefault();
});

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert('Kich cai qq')
})

