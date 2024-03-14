const data = JSON.parse(dataInfo);
const container = document.querySelector('div.container');
data.forEach(element => {
    const divE1 = document.createElement('div');
    const title = document.createElement('h1');
    const text = document.createElement('p');
    const img = document.createElement('img');

    title.textContent = element.heading;
    text.textContent = element.text;
    img.src = element.url;
    img.style.width = element.width + 'px';
    img.style.height = element.height + 'px';
    divE1.appendChild(img);
    divE1.appendChild(title);
    divE1.appendChild(text);
    divE1.classList.add(element.class);
    container.appendChild(divE1);
});