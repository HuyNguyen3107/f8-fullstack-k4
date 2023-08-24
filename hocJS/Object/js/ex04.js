// var user = {
//     name: 'Hoang An',
//     email: 'hoangan.web@gmail.com',
//     getName: function () {
//         return this.name;
//     },
// };

// var customer = {
//     name: 'Luu Anh Quan',
//     email: 'luuanhquan@gmail.com',
//     getName: function () {
//         return this.name;
//     }
// };

// console.log(user, customer);

// var Person = function (name, email) {
//     this.name = name;
//     this.email = email;
//     this.getName = function () {
//         return this.name;
//     };
// };
// Person.prototype.message = 'Hoang An F8'
// var person = new Person('Hoang An', 'hoangan@gmail.com');
// var user = new Person('Quan', 'quan@gmail.com');

// console.log(person.message);
// console.log(user.message);

var User = function () {
    this.name = 'Hoang An';
    this.email = 'hoangan@gmail.com';
};

var Auth = function () {
    var user = new User();
    this.getInfo = function () {
        return `
            Name: ${user.name}
            Email: ${user.email}
        `;
    };
};

// var auth = new Auth();

// console.log(auth.getInfo());

// var a = new Auth();
// var b = new User();
// var c = 'Hoang An';
// // var d;

// console.log(a.constructor.name);
// console.log(b.constructor.name);
// console.log(c.constructor.name);
// console.log(d.constructor.name);

// var a = {};

// if (typeof a === 'object' && !Array.isArray(a) && a !== null) {
//     console.log(`this is object`);
// } else {
//     console.log(`this isn't object`);
// }

var getMsg = function () {
    return `Hello F8`;
};

console.log(window.getMsg());

User.getMsg2 = function () {
    return `Hello F8 - 02`;
}
console.log(User.getMsg2());