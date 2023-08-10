// var showMsg = function (msg) {
//     var val ='Hoang An'
//     var display = function () {
//         console.log('Xin chao F8', msg);
//         console.log(val);
//     }
//     display();
// }

// showMsg('Fullstack');

// var sum = function(a) {
//     return function (b) {
//         return a + b;
//     }
// } 
// var add = sum(3);
//  console.log(add(10));

// var showNumber = function (n) {
//     console.log(n);
//     if (n > 1) {
//         showNumber(n - 1);
//     }
// };

// showNumber(10);



var getTotal = function (n) {
    if (n === 1) {
        return 1;
    }
    return n + getTotal(n -1);
}
console.log(getTotal(20));