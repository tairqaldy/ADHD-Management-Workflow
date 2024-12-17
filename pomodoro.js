let timeLeft = 25 * 60;
let timer;
let completedPomodoros = localStorage.getItem('completedPomodoros') || 0;

document.getElementById('startPomodoroBtn').addEventListener('click', startPomodoro);
document.getElementById('startBreakBtn').addEventListener('click', startBreak);
document.getElementById('resetTimerBtn').addEventListener('click', resetTimer);

function startPomodoro() {
    startTimer(25 * 60, 'Pomodoro completed!');
}

function startBreak() {
    startTimer(5 * 60, 'Break finished!');
}

function startTimer(duration, message) {
    clearInterval(timer);
    timeLeft = duration;

    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert(message);
            if (message.includes('Pomodoro')) {
                completedPomodoros++;
                document.getElementById('pomodoroCounter').textContent = completedPomodoros;
                localStorage.setItem('completedPomodoros', completedPomodoros);
            }
            return;
        }
        updateTimerDisplay();
        timeLeft--;
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    document.getElementById('timerDisplay').textContent = `${minutes}:${seconds}`;
}

updateTimerDisplay();
document.getElementById('pomodoroCounter').textContent = completedPomodoros;
