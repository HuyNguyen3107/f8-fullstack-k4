// var msg = 'Hoang An';
// function sum(a,b) {
//     var total= a + b;
//     return total;
// }
// console.log(sum(5, 10));

// function getMsg() {
//     return msg;
// }

// function setMsg(value) {
//     msg = value;
// }

// setMsg('Fullstack')

// console.log(getMsg());
// function max() {
//     var maxVal = 0;
//     for (var i = 0; i < arguments.length; i ++) {
//         var val = arguments[i];
//         if (maxVal < val) {
//             maxVal = val;
//         }
//     }
//     console.log(maxVal);
// }
// max(5, 10, 15, 20, 250, 30, 60, 70);

function concat(str, ...rest) {
    str += '';
    if (rest.length) {
        for (var i = 0; i < rest.length; i++) {
            str += rest[i]
        }
    }
    return str;
}
console.log(concat("Hoang An", " F8", " F9", " F10"));