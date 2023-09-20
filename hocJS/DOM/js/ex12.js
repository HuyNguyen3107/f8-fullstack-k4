var root = document.querySelector('.root');

var h2 = document.createElement('h2');
var addBtn = document.createElement('button');
var subBtn = document.createElement('button');

h2.innerText  = 'Count: ';
addBtn.innerText = '+';
subBtn.innerText = '-';
root.append(h2);
root.append(subBtn);
root.append(addBtn);
var num = document.createElement('span');
num.innerText = '0';
h2.append(num);

addBtn.addEventListener('click', function() {
    num.innerText++;
})
subBtn.addEventListener('click', function() {
    num.innerText--;
})

var check = false;

var increase = function () {
    num.innerText++;
    if (check) {
        setTimeout(function() {
            increase();
        }, 100)
    }
}
var decrease = function () {
    num.innerText--;
    if (check) {
        setTimeout(function() {
            decrease();
        }, 100)
    }
}

addBtn.addEventListener('mousedown', function() {
    check = true;
    increase();
})

addBtn.addEventListener('mouseup', function() {
    check = false;
    increase();
})

subBtn.addEventListener('mousedown', function() {
    check = true;
    decrease();
})

subBtn.addEventListener('mouseup', function() {
    check = false;
    decrease();
})
