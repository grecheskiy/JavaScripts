// 1. Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
//const block = document.getElementById('block');
//const first = document.querySelector('div#block > p');
//console.log(block);
//console.log(first);
//console.log(first.textContent);
//console.log(first.innerHTML);
// 2. Получите ссылку на первый абзац с классом www, выведите его в консоль
// <p class="www">text 1</p>
// <p class="www">text 2</p>
//const first = document.querySelector('div#block > p');
//const www = document.querySelector("div#block > p.www");
//console.log(www.innerHTML);
// 3. Дан тег <a class="link" href="#">link text html html</a>
// Вам необходимо поменять текст внутри ссылки на "link text js"
// Заменить href на значение "https://developer.mozilla.org/ru/"
//const link = document.querySelector("a.link");
//link.innerHTML = "link text js";
//link.href = "https://developer.mozilla.org/ru/";
//console.log(link);
// 4. Дан тег <img class="photo" src="" alt="">
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета
//document.querySelector("img.photo").src = "https://itsjavascript.com/wp-content/uploads/2022/06/TypeError-date.getMinutes-is-not-a-function.png";
// 5. Дан тег <div class="content"></div>
// Создайте новый элемент p
// Добавьте в него текст "Новый текстовый элемент"
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел
const newP = document.createElement('p');
newP.textContent = 'Новый текстовый элемент';
const content = document.querySelector('div.content');
content.appendChild(newP);
newP.remove();
// 6. Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на кнопку
const button = document.createElement('button');
button.textContent = "Кнопка";
content.appendChild(button);
let counter = 0;
button.addEventListener('click', (e) => {
    console.log(e);
    counter++;
    console.log(counter);
// Добавьте текс для кнопки "Отправить" При клике текст менялся на "Отправлено"
    e.target.textContent = "Отправлено";
});
