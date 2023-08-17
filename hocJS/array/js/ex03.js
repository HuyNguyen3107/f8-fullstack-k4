var users = ['An', 'Duong', 'Vuong', 'Tuan', 'Dat'];
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

var query = [
    ['name', 'F8'],

    ['keywords', 'Fullstack'], 

    ['category', 1],
];

var newQuery = query.map(function(value) {
    return value.join('=')
})
console.log(newQuery.join('&'));