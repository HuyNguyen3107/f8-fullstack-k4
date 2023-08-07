// for (var i = 1; i <= 10; i++) {
//     for (var j = 1; j <= i; j++) {
//         console.log(`Xin chao F8: ${i} and ${j}`);
//     }
// }
// var n = 10;
// var total = 0;
// for (var i = 1; i <= n; i++) {
//     total += i;
// }
// console.log(total);
// var n = 21;
// var total = 0;
// var a = 0;
// for (var i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//         total += i;
//         a += 1;
//     }
// }
// console.log(total / a);

var n = 11;
if (n % 1 === 0) {
    var count = 0;
    if (n === 0 || n === 1) {
        count += 1;
    }
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            count += 1;
            break;
        }
    }
    if (count !== 0) {
        console.log('No');
    } else {
        console.log('Yes');
    }
} else {
    console.log("Not Integer");
}

