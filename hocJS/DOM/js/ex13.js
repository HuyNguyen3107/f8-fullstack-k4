var todo = document.querySelector('.todo');
var todoForm = todo.querySelector('form');
var todoList = todo.querySelector('.todo-list');

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var inputEle = this.children[0];
    var name = inputEle.value;
    // var html = `<p>${name} <span>delete</span></p>`;
    // todoList.innerHTML += html;

    var p = document.createElement('p');
    p.innerText = name;
    var span = document.createElement('span');
    span.innerText = ' Delete';
    p.append(span)
    todoList.append(p);
    span.addEventListener('click', function (e) {
        e.target.parentElement.remove();
    })
    inputEle.value = '';
})
 

var comment = document.createComment('.Todo List');
todo.append(comment)

var content = document.querySelector('.content');

console.log(content.childNodes);
console.log(content.firstElementChild);
console.log(content.firstChild);
