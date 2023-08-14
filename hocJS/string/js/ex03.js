var content = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia porro eligendi quas velit necessitatibus sapiente,
eaque illum iste eveniet odit accusamus aut quos architecto, nulla ipsam omnis, lorem lorem nam beatae! Iure.`;

var keyword = 'lorem';
var heading = `<p>Tim kiem voi tu khoa ${keyword}</p>`;

// var footer = `<p>Da tim thay 0 ket qua voi tu khoa ${count}</p>`

var result = "";
var position = content.toLowerCase().indexOf(keyword.toLowerCase());
var count = 0;
while (position !== -1) {
    result += content.slice(0, position) + `<span>${content.slice(position, position + keyword.length)}</span>`;
    content = content.slice(position + keyword.length);
    position = content.toLowerCase().indexOf(keyword.toLowerCase());
    count++;
}
result += content;
console.log(result);

var footer = `<p>Da tim thay 0 ket qua voi tu khoa ${count}</p>`;

document.write(heading + result + footer);