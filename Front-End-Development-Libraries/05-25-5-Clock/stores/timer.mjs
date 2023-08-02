// ./stores/timer.js
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useTimerStore = defineStore('timer', () => {
    const sessionTime = ref(20);
    const breakTime = ref(5);
    const isSession = ref(true);
    const isBreak = ref(false);
    const count = ref(20);
    const timerID = ref(0);

    function startTimer() {
        if (timerID.value === 0) {
            if (isSession) {
                count.value = sessionTime.value;
            } else if (isBreak) {
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
            if (isSession.value) {
                isSession.value = false;
                isBreak.value = true;
                count.value = breakTime.value;

            } else if (isBreak.value) {
                isSession.value = true;
                isBreak.value = false;
                count.value = sessionTime.value;
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
        if (sessionTime < 60) {
            sessionTime++;
        } else {
            return;
        }
    }

    function decrementSession() {
        if (sessionTime > 1) {
            sessionTime--;
        } else {
            return;
        }
    }

    function incrementBreak() {
        if (breakTime < 60) {
            breakTime++;
        } else {
            return;
        }
    }

    function decrementBreak() {
        if (breakTime > 1) {
            breakTime--;
        }
    }

    return { sessionTime, breakTime, count, startTimer, pauseTimer, timer, resetTimer, incrementSession, decrementSession, incrementBreak, decrementBreak }
})