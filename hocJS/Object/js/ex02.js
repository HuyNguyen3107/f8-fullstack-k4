var user = {
    name: 'Hoang An',
    email: 'hoangan@gmail.com',
    detail: {
        age: 31,
        job: 'Teacher',
        histories: [
            {
                year: 2020,
                name: 'Cong viec 1',
            },
            {
                year: 2021,
                name: 'Cong viec 2',
            },
            {
                year: 2022,
                name: 'Cong viec 3',
            }
        ]
    },
    getInfo: function () {
        var temp = this;
        return {
            address: 'Ha Noi',
            username: this.name,
            getFull: function () {
                return `
                Name: ${temp.name}
                Email: ${temp.email}
                Dia chi: ${this.address}
                `
            }
        }
    },
};

// console.log(user.detail.histories[0].name);
// console.log(user.getInfo().address);
// console.log(user.getInfo().getFull());

Object.prototype.combine = function(...args) {
    var temp = this;
    return args.map(function (value) {
        return temp[value];
    });
};

Object.prototype.message = 'F8 - Fullstack'

var customer = {
    name: 'Hoang An',
    email: 'hoangan@gmail.com',
    age: 31,
};

var service = {
    name: 'Dao tao lap trinh',
    teacher: 'Hoang An',
};
console.log(customer.combine('name', 'email', 'age'));
console.log(service.combine('name', 'teacher'));
var a =10;
console.log(a.message);

