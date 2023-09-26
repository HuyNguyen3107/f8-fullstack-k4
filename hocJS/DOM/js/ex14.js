var checkAll = document.querySelector(".check-all");
var checkItems = document.querySelectorAll(".check-item");
var btnDelete = document.querySelector('.delete');
var number = document.createTextNode('0');
var span = document.querySelector('.number')
span.append(number)
var count = 0;
checkAll.addEventListener("change", function () {
  if (checkAll.checked === true) {
    checkItems.forEach(function (checkItem) {
      checkItem.checked = true;
      btnDelete.disabled = false;
      number.data = checkItems.length;
      count = checkItems.length;
    });
  } else {
    checkItems.forEach(function (checkItem) {
      checkItem.checked = false;
      btnDelete.disabled = true;
      number.data = 0;
      count = 0;
    });
  }
});

checkItems.forEach(function (item) {
  item.addEventListener("change", function () {
    if (!this.checked) {
        checkAll.checked = false;
        btnDelete.disabled = !Array.from(checkItems).some(function(item) {
            return item.checked
        });
        number.data = --count;
        return;
    }
    var check = Array.from(checkItems).every(function (item) {
      return item.checked;
    });
    var status = Array.from(checkItems).some(function (item) {
        return item.checked;
    })
    checkAll.checked = check;
    btnDelete.disabled = !status;
    number.data = ++count;
  });
});
