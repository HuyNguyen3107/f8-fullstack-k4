var users = [
    {
        id: 1,
        name: 'Hoang An',
    },
    {
        id: 2,
        name: 'Nguyen Duong',
    },
    {
        id: 3,
        name: 'Anh Quan',
    }
];
// var json1 = `[{"id":1,"name":"Hoang An"},{"id":2,"name":"Nguyen Duong"},{"id":3,"name":"Anh Quan"}]`;
var json = JSON.stringify(users);
console.log(json);
console.log(JSON.parse(json));
console.log(JSON);
// console.log(JSON.isRawJSON(json));