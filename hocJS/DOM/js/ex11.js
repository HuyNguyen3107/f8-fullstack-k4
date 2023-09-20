// var title = document.querySelector('.title');
// console.log(title);

// var content  = document.querySelector('.content');
// var btn = content.querySelector('.btn');

// var handleClick = function () {
//     var btn = content.querySelector('.btn');
//     btn.addEventListener('click', function() {
//         content.innerHTML += `<h1>F8-Fullstack</h1>`;
//         handleClick();
//     })
// }

// btn.addEventListener('click', function () {
//     content.innerHTML += `<h1>F8-Fullstack</h1>`;
//     handleClick();
// })

// handleClick();

var root = document.querySelector('.root');

var h1 = document.createElement('h1');
h1.innerText = 'Fullstack - F8';
h1.classList.add('title');
h1.id = 'title'
// document.body.append(h1)

root.append(h1);
// root.append('dsfsfsf')

var h2 = document.createElement('h2');
h2.innerText = 'Hello - F8';
root.prepend(h2);

// console.log(h1);

var btn = document.createElement('button');
btn.innerText = 'Add';
var count = 0;
root.append(btn);
btn.addEventListener('click', function () {
    var p = document.createElement('p');
    p.innerText = `Cong viec: ${++count}`;
    root.append(p);
    if (count === 5) {
        h1.style.color = 'red';
        h1.innerText = 'Hoang An F8';
    }
})

var ul = document.createElement('ul');

for (var i = 1; i <= 5; i++) {
    var li = document.createElement('li');
    li.classList.add('title');
    li.innerText = `Item ${i}`;
    ul.append(li);
}

root.prepend(ul);

var h3 = document.createElement('h3');
h3.innerText = 'Hom nay uong gi? anh An bao.';

root.insertBefore(h3,h1);

var p = document.createElement('p');
p.innerText = 'Huy';
root.insertBefore(p, h3.nextElementSibling);

var h4 = document.createElement('h4');
h4.innerText = 'Hoc lap trinh de di lam';
h4.style.color = 'red';
root.replaceChild(h4,h2)
root.append(h2);

root.removeChild(h2);