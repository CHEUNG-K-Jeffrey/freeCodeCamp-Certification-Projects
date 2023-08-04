<script setup>
import { computed, ref, onMounted } from 'vue'
import { useTimerStore } from './stores/timer.mjs'

const store = useTimerStore();
const beep = ref();

</script>

<template>
    <h1>25 + 5 Clock</h1>
    <div id="clock">
        <div id="session-box">
            <h2 id="session-label">Session Length</h2>
            <i id="session-increment" @click="store.incrementSession" class="fa-solid fa-chevron-up"></i>
            <div id="session-length">{{ store.sessionTime / 60 }}</div>
            <i id="session-decrement" @click="store.decrementSession" class="fa-solid fa-chevron-down"></i>
        </div>
        <div id="break-box">
            <h2 id="break-label">Break Length</h2>
            <i id="break-increment" @click="store.incrementBreak" class="fa-solid fa-chevron-up"></i>
            <div id="break-length">{{ store.breakTime / 60 }}</div>
            <i id="break-decrement" @click="store.decrementBreak" class="fa-solid fa-chevron-down"></i>
        </div>
        <div id="timer-box">
            <h2 id="timer-label">Current
                <span v-show="store.sessionType === 'session'">Session</span>
                <span v-show="store.sessionType === 'break'">Break</span>
                Count
            </h2>
            <div id="time-left">{{ store.timeLeft }}</div>
            <i id="start_stop" @click="store.toggleTimer" class="fa-solid"
                :class="{ 'fa-play': store.isPaused, 'fa-pause': !store.isPaused }"></i>
            <i id="reset" @click="store.resetTimer" class="fa-solid fa-stop"></i>
            <audio ref="beep" id="beep" src="beep.mp3"></audio>
        </div>
    </div>
</template>

<style>
body {
    background-color: rgb(87, 160, 243);
    color: rgb(241, 243, 250)
}

h1 {
    text-align: center;
}

#clock {
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80vh;
}

#session-box,
#break-box,
#timer-box {
    text-align: center;
    border: 1px solid rgb(241, 243, 250);
    border-radius: 25px;


}</style>