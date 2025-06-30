const btn = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const list = document.querySelectorAll('.header__list_item');

// list.addEventListener('click', function(event) {
//     closeMenu()
// });

list.forEach(item => {
    item.addEventListener('click',closeMenu)
});


function closeMenu() {
    menu.classList.remove('burger_menu_on');
    btn.classList.remove('active');
}

btn.addEventListener('click', function(event) {
    event.stopPropagation();
    menu.classList.toggle('burger_menu_on');
    btn.classList.toggle('active');
});

// Закрывать меню при клике вне области меню
document.addEventListener('click', function(event) {
    const target = event.target;
    if (!menu.contains(target) && !btn.contains(target)) {
        closeMenu();
    }
});

// // Остановка всплытия события при клике внутри меню
// menu.addEventListener('click', function(event) {
//     event.stopPropagation();
// });

// // Остановка всплытия события при клике на кнопке
// btn.addEventListener('click', function(event) {
//     event.stopPropagation();
// });


