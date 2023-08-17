var users = ['An', 'Duong', 'Vuong'];

console.log(typeof users);
console.log(users);

// var users = new Array('An', 'Duong', 'Vuong');

// console.log(typeof users);
// console.log(users);

console.log(Array.prototype);
console.log([Array]);

if (Array.isArray(users)) {
    console.log('Day la mang');
} else {
    console.log('Day khong phia la mot mang');
}

// console.log(users.length);

users[users.length] = 'Dat';
users[users.length] = 'Tung';
users[2] = 'Dung';
// console.log(users);

// for (var i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// for (var value of users) {
//     console.log(value);
// }

// var indexDel = 1;
// var newArr = [];
// for (var index in users) {
//     if (+indexDel === +index) {
//         continue;
//     }
//     newArr[newArr.length] = users[index];
// }
// console.log(newArr);

// var value = 'Tuan';
// var newArr = [];
// newArr[0] = value;
// for (var index in users) {
//     newArr[newArr.length] = users[index];
// }
// console.log(newArr);


var arr1 = ['a', 'b', 'c', 'd'];
var arr2 = [1,2,3,4,4,5];
var arr3 = [];
// for (var index in arr1) {
//     arr3[arr3.length] = arr1[index];
// }
// for (var index in arr2) {
//     arr3[arr3.length] = arr2[index];
// }
// console.log(arr3);
var a = 0;
var b = 0;
for (var i = 0; i < (arr1.length + arr2.length); i++) {
    if (a < arr1.length) {
        arr3[i] = arr1[a];
        a++;
    } else if (b < arr2.length) {
        arr3[i] = arr2[b];
        b++;
    }
}
console.log(arr3);