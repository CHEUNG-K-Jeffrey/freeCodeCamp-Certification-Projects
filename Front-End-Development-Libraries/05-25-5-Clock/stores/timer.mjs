// ./stores/timer.js
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useTimerStore = defineStore('timer', () => {
    const sessionTime = ref(25*60);
    const breakTime = ref(5*60);
    const sessionType = ref("session");
    const count = ref(25 * 60);
    const timerID = ref(0);

    const timeLeft = computed(() => {
        let minutes = parseInt(count.value/60).toString().padStart(2,"0");
        let seconds = parseInt(count.value % 60).toString().padStart(2,"0");
        return `${minutes}:${seconds}`
    });

    const isPaused = computed(() => {
        if (timerID.value === 0) {
            return true;
        } else {
            return false;
        }
    });


    function startTimer() {
        if (count.value > 0) {
            
            timerID.value = setTimeout(timer, 1000);

            console.log("Timer started.");
        } else {
            console.log("Timer is already running");
        }

    }

    function timer() {
        if (count.value > 0) {
            count.value--;
            timerID.value = setTimeout(timer, 1000);
        } else if (count.value <= 0) {
            switch (sessionType.value) {
                case "session":
                    count.value = breakTime.value;
                    sessionType.value = "break";
                    break;
                case "break":
                    count.value = sessionTime.value;
                    sessionType.value = "session";
                    break;

            }
            timerID.value = setTimeout(timer, 1000);
        }

        console.log(`Count is: ${count.value}`);

    }

    function pauseTimer() {
        if (timerID.value > 0) {
            clearTimeout(timerID.value);
            timerID.value = 0;
            console.log("Timer stopped");
        } else {
            console.log("Failed to pause timer?");
        }
    }

    function toggleTimer() {
        if (isPaused.value) {
            startTimer();
        } else {
            pauseTimer();
        }
    }

    function resetTimer() {
        pauseTimer();
        sessionTime.value = 25 * 60;
        breakTime.value = 5 * 60;
        count.value = sessionTime.value;
        sessionType.value = "session";
    }

    function incrementSession() {
        if (sessionTime.value < 60*60) {
            sessionTime.value += 60;
        } else {
            return;
        }
    }

    function decrementSession() {
        if (sessionTime.value > 60) {
            sessionTime.value -=  60;
        } else {
            return;
        }
    }

    function incrementBreak() {
        if (breakTime.value < 60*60) {
            breakTime.value += 60;
        } else {
            return;
        }
    }

    function decrementBreak() {
        if (breakTime.value > 60) {
            breakTime.value -= 60;
        }
    }

    return {
        sessionTime,
        breakTime,
        sessionType,
        count,
        timeLeft,
        isPaused,
        startTimer,
        pauseTimer,
        toggleTimer,
        timer,
        resetTimer,
        incrementSession,
        decrementSession,
        incrementBreak,
        decrementBreak
    }
})