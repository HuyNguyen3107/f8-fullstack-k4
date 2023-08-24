var user = {
    name: 'Hoang An',
    email: 'hoangan@gmail.com',
};

var course = {
    courseName: 'Fullstack K4',
    teacher: 'Hoang An F8',
}

// for (var key in course) {
//     user[key] = course[key];
// }

var result = Object.assign(Object.assign({}, user), course);


console.log(result);
console.log(user);