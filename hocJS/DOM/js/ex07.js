var content = document.querySelector(".content");

// console.log(content.style);

// content.style.color = 'red';
// content.style.fontWeight = 'bold';
// content.style.textTransform = 'uppercase';

// var css = {
//     color: 'red',
//     fontWeight: 'bold',
//     fontStyle: 'italic',
//     textTransform: 'uppercase',
//     backgroundImage: `url(https://picsum.photos/200/300)`,
//     transition: 'all .4s linear',
// };

// Object.assign(content.style, css);

// console.log(content.style.color);

var btnFaded = document.querySelector(".btn");

btnFaded.addEventListener("click", function () {
    if (content.style.visibility === "" && content.style.opacity === "") {
        var css = {
            visibility: 'visible',
            opacity: '1',
            height: 'fit-content',
          };
          Object.assign(content.style, css)
    } else {
        content.style.opacity = '';
        content.style.visibility = '';
        setTimeout(function () {
            content.style.height = '';
        }, 400);
    }
});

