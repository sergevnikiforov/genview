var contents = document.querySelectorAll('.content');
var wideRight = document.querySelector('.right');
var myBtn = document.querySelectorAll('.myBtn');
var itemBtnChoose = document.querySelectorAll('.variant');

var form = document.querySelector("form");
var login = form.querySelector("[name=login]");
var email = form.querySelector("[name=email]");
var password = form.querySelector("[name=password]");
var checkbox = form.querySelector(".checkbox");
var storage = localStorage.getItem("login");

var overlay = document.querySelector(".modal-overlay__procent");
var arrProcent = ["34%", "30%", "36%"];





for (var i = 0; i < myBtn.length; i++) {
    console.log(typeof myBtn[i]);
    myBtn[i].mynum = i;
    myBtn[i].addEventListener('click', myFunc);
}

function myFunc() {
    var tabchange = this.mynum;
    if (tabchange == 0) {
        console.log(contents[1]);
        wideRight.classList.add('wide-right');
        overlay.classList.add('wide-left');
    }
    console.log(tabchange);

    if (tabchange > 1) {
        return
    } else {
        for (var i = 0; i < contents.length; i++) {
            contents[i].classList.remove('show');
        }
        contents[tabchange + 1].classList.add('show');
    }
}

for (var i = 0; i < itemBtnChoose.length; i++) {
    console.log(typeof itemBtnChoose[i]);
    itemBtnChoose[i].myChooseNum = i;
    itemBtnChoose[i].addEventListener('click', myClickService);
}

function myClickService() {
    var tabchosen = this.myChooseNum;
    for (var i = 0; i < itemBtnChoose.length; i++) {
        itemBtnChoose[i].classList.remove('chosen');
    }
    overlay.classList.add("active");
    overlay.innerHTML = arrProcent[tabchosen];
    itemBtnChoose[tabchosen].classList.add('chosen');


}

form.addEventListener("submit", function(event) {

    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }

    // alert(login.value);
    // alert(password.value);
    if (login.value && email.value && password.value && checkbox.checked) {
        localStorage.setItem("login", login.value);
    } else {
        event.preventDefault();
        form.classList.add("modal-error");
    }
});