// var numbers = [5, 10, 15, 20, 25];
// console.log(numbers);
// var result = numbers.reduce(function (pre, current, index) {
//     return pre + current;
// }, 0)
// console.log(result);

// var numbers = [5, 2, 1, 11, 144224];
// console.log(numbers);
// var result = numbers.reduce(function (max, number) {
//     return max < number ? number : max;
// })
// console.log(result);

var arr1 = [5, 2, 1, 9, 8];
var arr2 = [2, 1, 8, 3];

var arr3 = arr1.reduce(function (prev, current) {
  if (!arr2.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);
console.log(arr1);
console.log(arr2);
console.log(arr3);
