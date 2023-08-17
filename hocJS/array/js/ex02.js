console.log(Array.prototype);
var users = ['An', 'Duong', 'Vuong', 'Tuan', 'Dat', 'Tuan'];

// console.log(users);

// console.log(users.at(3));

// console.log(users.concat([1,2,3,4,5,6], ['a', 'b', 'c']));

// console.log(users.concat('Tung'));


// console.log(users.indexOf('Tuan'));

// console.log(users.lastIndexOf('Tuan'));

// console.log(users.includes('Da'));

// console.log(users.slice(0,4));
// console.log(users.slice(4));
// console.log(users.slice(-4));

// console.log(users.join(' '));

// var fullname = 'Ta Hoang An';

// console.log(fullname.split(' ').slice(-1).join());

// console.log(users.push('a', 'b', 'c'));
// console.log(users);

// console.log(users.unshift('a', 'b', 'c'));
// console.log(users);
// console.log(users.pop());
// console.log(users.shift());
// console.log(users);

// console.log(users.splice(1,2, 'a', 'b', 'c'));
// console.log(users);

// users.sort();
// console.log(users);

// var numbers = [1, 10, 11, 12 ,4];
// numbers.sort(function (a,b) {
//     // console.log(a,b);
//     // if (b > a) {
//     //     return -1;
//     // }
//     return a - b;
// });
// console.log(numbers);

var customers = [
    'Hoang Van Thanh',
    'Dang Ngoc Khai',
    'Nguyen Chi Nam',
    'Nguyen Hoang An',
    'Hoang Van Chanh',
    'Hoang Van Bhanh',
];

function getFirstName(n) {
    return n.split(' ').slice(-1).join();
}

var newArr = customers.sort(function(a, b) {
    if (getFirstName(a) < getFirstName(b)) {
        return -1;
    }
})
console.log(newArr);