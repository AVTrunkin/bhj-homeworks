const timerElement = document.getElementById('timer');

let timerValue = parseInt(timerElement.textContent, 10);

function updateTimerDisplay() {
    timerElement.textContent = timerValue;
}

function countdown() {
    timerValue--;

    updateTimerDisplay();

    if (timerValue <= 0) {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
    }
}

const timerInterval = setInterval(countdown, 1000);
