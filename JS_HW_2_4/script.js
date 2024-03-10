// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
const dropdownE1 = document.querySelectorAll(".dropdown-item");
dropdownE1.forEach((item) => {
  item.classList.add("super-dropdown");
});
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
const btnE1 = document.querySelector(".btn");
if (btnE1.classList.contains("btn-secondary")) {
    btnE1.classList.remove("btn-secondary"); 
    } else {
        btnE1.classList.add("btn-secondary");
}
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const menuE1 = document.querySelector(".menu");
menuE1.classList.remove("dropdown-menu");
// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// "<a href="#">link</a>"
const dropdownE2 = document.querySelector("div.dropdown");
dropdownE2.insertAdjacentHTML('afterend', '<a href="#">link</a>');
// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const dropdownMenuButtonE1 = document.querySelector("#dropdownMenuButton");
//dropdownMenuButtonE1.setAttribute('id', 'superDropdown');
dropdownMenuButtonE1.id = "superDropdown";
// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
const datadd = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
datadd.setAttribute('data-dd', '3');
// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const dropdownToggleE1 = document.querySelector(".dropdown-toggle");
dropdownToggleE1.removeAttribute('type');