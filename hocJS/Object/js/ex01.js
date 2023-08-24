var user = {
    name: 'Hoang An',
    email: 'hoangan@gmail.com',
    address: 'Ha Noi',
    'shipping-address': 'Cau Giay',
    getName: function () {
        return this.name;
    },
};

// var customer = new Object();
// console.log(user);
console.log(user.getName());
// console.log(user["shipping-address"]);
// console.log(user['email']);

// user.age = 31;
// user['job'] = 'Teacher';
// user.age = 32;
// user['address'] = 'Nam Tu Liem - HN';
// delete user.age;
// console.log(user);

// for (var key in user) {
//     console.log(key, user[key]);
// }

// Object.keys(user).forEach(function(key) {
//     console.log(key, user[key]);
// });