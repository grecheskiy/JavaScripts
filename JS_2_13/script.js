const conteiner = document.querySelector('div.conteiner');

const videoEl = document.createElement('video');
videoEl.src = 'test_video.mp4';
videoEl.style.width = '860px';
conteiner.appendChild(videoEl);

const uiDiv = document.createElement('div');
uiDiv.classList.add('ui');
conteiner.appendChild(uiDiv);

const progressEl = document.createElement('input');
progressEl.classList.add('progress');
progressEl.type = 'range';
progressEl.style.width = '360px';
progressEl.min = 0;
progressEl.max = 100;
progressEl.value = 0;
uiDiv.appendChild(progressEl);

const timeEl = document.createElement('p');
timeEl.innerHTML = '0';
uiDiv.appendChild(timeEl);

const brEl = document.createElement('br');
uiDiv.appendChild(brEl);

const playEl = document.createElement('i');
playEl.classList.add('fas');
playEl.classList.add('fa-play');
uiDiv.appendChild(playEl);

const pauseEl = document.createElement('i');
pauseEl.classList.add('fas');
pauseEl.classList.add('fa-pause');
uiDiv.appendChild(pauseEl);

const valumeEl = document.createElement('input');
valumeEl.classList.add('valume');
valumeEl.type = 'range';
valumeEl.min = 0;
valumeEl.max = 10;
valumeEl.value = 10;
uiDiv.appendChild(valumeEl);

valumeEl.addEventListener('change', (e) => {
    videoEl.volume = e.target.value / 10;
});

playEl.addEventListener('click', () => {
    videoEl.play();
});

pauseEl.addEventListener('click', () => {
    videoEl.pause();
});

progressEl.addEventListener('change', (e) => {
    videoEl.currentTime = videoEl.duration * (e.target.value / 100);
});

videoEl.addEventListener('timeupdate', function (e) {
    timeEl.innerText = videoEl.currentTime;
    progressEl.value = Math.round(videoEl.currentTime / videoEl.duration * 100);
});
