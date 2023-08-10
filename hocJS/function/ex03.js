// var getMsg = function() {
//     return 'F8';
// }
// console.log(getMsg());

// var a = function() {
//     console.log("Func A");
// }

// console.log(typeof a);

// if (typeof a === 'function') {
//     console.log(a());
// } else {
//     console.log(a);
// }

// var a = function(name) {
//     console.log("Func A", name);
// }

// var b = a;
// var c = b;

// c('F8');

// var getA = function (fn, ...rest) {
//     console.log("getA");
//     // getB();
//     if (typeof fn === 'function') {
//         fn(...rest);
//     }
// }
// var getB = function () {
//     console.log("getB");
// }
// var getC = function (name, email) {
//     console.log("getC", name, email);
// }
// getA(getC, 'Hoang An', 'admin@fullstack.edu.vn');

// getA(function () {
//     getC('Hoang An', 'admin@fullstack.edu.vn');
// });
// setTimeout(function () {
//     console.log('My name is Ta Hoang An');
// }, 1000);

// var handler = function (name) {
//     console.log('My name is Ta Hoang An', name);
// };

// setTimeout(handler, 1000, 'F8')

// var count = 0;
// var id = setInterval(function() {
//     console.log(++count);
//     if (count === 10) {
//         clearInterval(id);
//     }
// }, 100)

(function (name) {
    console.log('Xin chao F8', name);
})('Fullstack');

