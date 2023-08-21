// var users = ['An', 'Duong', 'Vuong', 'Tuan', 'Dat'];
// // console.log(users.fill('f8'));

// users.forEach(function (value, index, arr) {
//     console.log(value,index,arr);
// });

// var newArr = users.map(function (value, index) {
//     console.log(value, index);
//     return `<h3>${value} - ${index}</h3>`;
// })

// console.log(newArr);

// var html = `<ul>
//     ${users.map(function (value) {
//         return `<li>Hoc vien ${value}</li>`
//     }).join('')}
// </ul>`
// document.write(html)

// var query = [
//     ['name', 'F8'],

//     ['keywords', 'Fullstack'], 

//     ['category', 1],
// ];

// var newQuery = query.map(function(value) {
//     return value.join('=')
// })
// console.log(newQuery.join('&'));

// var numbers = [5, 1, 2, 9, 6, 8];
// var results = numbers.filter(function (number) {
//     if (number % 2 === 0) {
//         return true;
//     }
// }).filter (function (item) {
//     var index = numbers.indexOf(item);
//     if (index !== -1) {
//         numbers.splice(index, 1);
//     }
//     return true;
// })
// console.log(numbers);
// console.log(results);

// var customers = [
//     'Tạ Hoàng An',
//     'Lưu Anh Quân',
//     'Nguyễn Xuân Tuấn Anh',
//     'Hoàng Văn Thanh',
//     'Tạ Hoàng An',
//     'Trần Đinh Quý',
//     'Nguyễn Chi NAm',
// ];

// var keyword ='an';

// var results = customers.filter(function (customer) {
//     return customer.toLowerCase().includes(keyword.toLowerCase());
// })
// console.log(results);

// var numbers = [1, 2, 3, 4, 5, 6, 7];

// var result = numbers.findLastIndex(function (number) {
//     return number > 3;
// })

// console.log(result);

// var email = 'tuananh@gmail.com';

// var users = [
//   ['Hoang An', 'hoangan@gmail.com'],
//   ['Tuan Anh', 'tuananh@gmail.com'], 
//   ['Chi Nam', 'chinam@gmail.com'], 
//   ['Nguyen Duong', 'nguyenduong@gmail.com'], 
// ];

// var arr = users.filter(function (value) {
//    return !value.includes(email)
// });
// console.log(arr);

// var numbers = [1,2,3,4,5,6,7,8];
// var check = numbers.every(function (number) {
//     return number % 2 === 0;
// })
// console.log(check);

