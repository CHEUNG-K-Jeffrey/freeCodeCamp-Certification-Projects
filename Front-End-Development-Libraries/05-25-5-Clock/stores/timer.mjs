// ./stores/timer.js
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useTimerStore = defineStore('timer', () => {
    const sessionTime = ref(20);
    const breakTime = ref(5);
    const sessionCount = ref(20);
    const breakCount = ref(5);

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

    return { seesionTime, breakTime, sessionCount, breakCount, incrementSession, decrementSession, incrementBreak, decrementBreak }
})