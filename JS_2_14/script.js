// navigator.geolocation.getCurrentPosition((position) => {
//     console.log(position);
//     const { latitude, longitude } = position.coords;
//     console.log('Current position', latitude, longitude);
// });

// let watchId = navigator.geolocation.watchPosition(({coords}) => {
//     console.log('Watch position', coords.latitude, coords.longitude);
// });

// // navigator.geolocation.clearWatch(watchId);

// const handlePositionError = (error) => {
//     switch  (error.code) {
//         case error.PERMISSION_DENIED:
//             console.log('User denied the request for Geolocation.');
//             break;
//         case error.POSITION_UNAVAILABLE:
//             console.log('Location information is unavailable.');
//             break;
//         case error.TIMEOUT:
//             console.log('The request to get user location timed out.');
//             break;
//         case error.UNKNOWN_ERROR:
//             console.log('An unknown error occurred.', error);
//             break;
// }}

const items = document.querySelectorAll('.container .box');

const handleDragStart = ({target}) => function (e) {
    target.style.opacity = '0.4'

    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', target.innerHTML)
}

const handleDragEnd = ({target}) => {
    target.style.opacity = '1'
}

items.forEach((item) => {
    item.addEventListener('dragstart', handleDragStart)
    item.addEventListener('dragend', handleDragEnd)
});

const handleDrop = (event) => {
    event.stopPropagation()
    const sourceElementHtml = e.dataTransfer.getData("taxt/html")

    if (event,target.innerHTML === sourceElementHtml) {
        return
    }
    event.target.innerHTML = sourceElementHtml

    return false
}