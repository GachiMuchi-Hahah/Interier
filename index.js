const burger_btn = document.querySelector('.burgerbtn');
const menu = document.querySelector('.menuheader');

burger_btn.addEventListener('click', function () {
    menu.classList.toggle('menushow');
});

const btn = document.getElementById('card');

btn.addEventListener('click', function () {
    alert('ОК');
});

btn.removeEventListener('click', function () {
    alert('ОК');
});