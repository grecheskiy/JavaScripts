const parseData = JSON.parse(dataInfo);
const container = document.querySelector('div.container');
console.log(news_template.content);
const template = news_template.content;
console.log(template);
parseData.forEach(element => {
    const newTemplate = template.cloneNode(true);
    newTemplate.querySelector('img.item_img').src=element.img;
    newTemplate.querySelector('div.item_title').innerHTML=element.title;
    newTemplate.querySelector('span.item_price-red').innerHTML=element.price;
    const color = newTemplate.querySelector('div.item_color');
    color.innerHTML=color.innerHTML + element.color;
    const size = newTemplate.querySelector('div.item_size');
    size.innerHTML=size.innerHTML + element.size;
    const quantity = newTemplate.querySelector('div.item_quantity > input');
    quantity.value = element.quantity;
    container.appendChild(newTemplate);
});