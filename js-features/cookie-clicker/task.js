const counterElement = document.getElementById('clicker__counter');
const cookieElement = document.getElementById('cookie');


let clickCount = 0;

let shouldIncrease = true;

const baseSize = 200;

const sizeDelta = 20;

cookieElement.addEventListener('click', function() {
    clickCount++;
    counterElement.textContent = clickCount;

    if (shouldIncrease) {
        cookieElement.style.width = (baseSize + sizeDelta) + 'px';
    } else {
        cookieElement.style.width = (baseSize - sizeDelta) + 'px';
    }

    shouldIncrease = !shouldIncrease;
});
