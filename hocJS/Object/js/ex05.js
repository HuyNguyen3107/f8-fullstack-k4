// var user = {
//     name: 'Hoang An',
//     email: 'hoangan@gmail.com',
//     age: 31,
// }

// console.log(Object.entries(user));

// var query = {
//     keyword: 'Hoang An',
//     category: 1,
//     brand: 1,
//     province: 'Ha Noi',
// };

// var result = Object.entries(query).map(function(value) {
//     return value.join('=');
// }).join('&');

// console.log(result.replaceAll(' ', '+'));


// var str = 'keyword=Hoang+An&category=1&brand=1&province=Ha+Noi';
// var temp = str.replaceAll('+', ' ').split('&').map(function(value) {
//     return value.split('=');
// });
// console.log(temp);

// var query = {};
// for (var key in temp) {
//     if (+temp[key][1]) {
//         query[temp[key][0]] = +temp[key][1];
//     } else {
//         query[temp[key][0]] = temp[key][1];
//     }
// }

// console.log(query);


// var users = [
//     'An', 'Tuan', 'Dat', 'Tung'
// ];

// Array.prototype.map2 = function (callback) {
//     var arr = this;
//     var output = [];
//     if (this.length) {
//         for(var i = 0; i < arr.length; i++) {
//            output[output.length] = callback(arr[i], i);
//         }
//     }
//     return output;
// }

// var output = users.map2(function (user, index) {
//     return `<h3>${index + 1} - ${user}</h3>`
// });

// console.log(output); 


// var user = {};
// console.log(user);

// var user = Object.create(null);
// console.log(user);

// var a = {
//     name: 'Hoang An',
//     email: 'hoangan@gmail.com',
// }

// // var b = a;
// // var b = Object.assign({}, a);
// var b = JSON.parse(JSON.stringify(a))
// b.name = 'hoang an';

// console.log(a, b);
// var a = {};
// console.log(a?.name?.job);

// var fullname = 'a';
// if (fullname?.length) {
//     console.log('ok');
// }

// var a = {};

// console.log(a.getName?.());

var users = 'adfsdfdf';
if (users?.length) {
    users.forEach?.(function (user) {
        console.log(user);
    })
}

