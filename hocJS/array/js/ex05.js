// var a = {
//     length: 3,
//     0: 'An',
//     1: 'Quan',
//     2: 'Thanh',
// };
// console.log(a);
// a = Array.from(a);
// console.log(a);

// a.forEach(function (item) {
//     console.log(item);
// });

var a = [
    'Hoang An',
    'hoangan.web@gmail.com',
];
// var b = a.map(function (item) {
//     return item;
// });

// var b = a.slice(0);
var b = Array.from(a);
b[0] = 'Hoang An F8';
console.log(a);
console.log(b);