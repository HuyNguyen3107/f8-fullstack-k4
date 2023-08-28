
var posts = [
  {
    title: "Tieu de bai viet 1",
    image: "https://picsum.photos/200/300",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, quaerat. Aliquid unde et ipsum
        aperiam, exercitationem quasi? Minima, autem? Vel, asperiores itaque molestiae veritatis repudiandae
        ullam temporibus. Necessitatibus, rerum in.`,
  },
  {
    title: "Tieu de bai viet 1",
    image: "https://picsum.photos/200/300",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, quaerat. Aliquid unde et ipsum
        aperiam, exercitationem quasi? Minima, autem? Vel, asperiores itaque molestiae veritatis repudiandae
        ullam temporibus. Necessitatibus, rerum in.`,
  },
  {
    title: "Tieu de bai viet 1",
    image: "https://picsum.photos/200/300",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, quaerat. Aliquid unde et ipsum
        aperiam, exercitationem quasi? Minima, autem? Vel, asperiores itaque molestiae veritatis repudiandae
        ullam temporibus. Necessitatibus, rerum in.`,
  },
];

var html = `
<div class="posts">
        ${posts.map(function (post, index) {
            return `
            <div class = "post-item ${index % 2 !== 0 ? 'post-right': "" }"> 
                <img src = "${post.image}">
                <div>
                <h2>${post.title}</h2>
                <p>${post.desc}</p>
                </div>
            </div>
            `
        }).join('')}
    </div>
`;

console.log(posts);
console.log(html);

document.write(html);
