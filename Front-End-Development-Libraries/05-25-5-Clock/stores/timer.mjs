// ./stores/timer.js
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useTimerStore = defineStore('timer', () => {
    const sessionTime = ref(20*60);
    const breakTime = ref(5*60);
    const sessionType = ref("session");
    const count = ref(20);
    const timerID = ref(0);

    const timeLeft = computed(() => {
        let minutes = parseInt(count.value/60).toString().padStart(2,"0");
        let seconds = parseInt(count.value % 60).toString().padStart(2,"0");
        return `${minutes}:${seconds}`
    });


    function startTimer() {
        if (timerID.value === 0) {
            if (sessionType.value === "session") {
                count.value = sessionTime.value;
            } else if (sessionType.value === "break") {
                count.value = breakTime.value;
            }
            timerID.value = setTimeout(timer, 1000);

            console.log("Timer started.");
        } else {
            console.log("Timer is already running");
        }

    }

    function timer() {
        if (count.value > 1) {
            count.value--;
            timerID.value = setTimeout(timer, 1000);
        } else if (count.value <= 1) {
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
            consoler.log("Failed to pause timer?");
        }
    }

    function resetTimer() {

    }

    function incrementSession() {
        if (sessionTime.value < 60) {
            sessionTime.value++;
        } else {
            return;
        }
    }

    function decrementSession() {
        if (sessionTime.value > 1) {
            sessionTime.value--;
        } else {
            return;
        }
    }

    function incrementBreak() {
        if (breakTime.value < 60) {
            breakTime.value++;
        } else {
            return;
        }
    }

    function decrementBreak() {
        if (breakTime.value > 1) {
            breakTime.value--;
        }
    }

    return {
        sessionTime,
        breakTime,
        sessionType,
        count,
        timeLeft,
        startTimer,
        pauseTimer,
        timer,
        resetTimer,
        incrementSession,
        decrementSession,
        incrementBreak,
        decrementBreak
    }
})