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
            <i id="session-increment" @click="store.incrementSession" class="button fa-solid fa-chevron-up"></i>
            <div class="text" id="session-length">{{ (store.sessionTime / 60).toString().padStart(2, "0") }}</div>
            <i id="session-decrement" @click="store.decrementSession" class="button fa-solid fa-chevron-down"></i>
        </div>
        <div id="break-box">
            <h2 id="break-label">Break Length</h2>
            <i id="break-increment" @click="store.incrementBreak" class="button fa-solid fa-chevron-up"></i>
            <div class="text" id="break-length">{{ (store.breakTime / 60).toString().padStart(2, "0") }}</div>
            <i id="break-decrement" @click="store.decrementBreak" class="button fa-solid fa-chevron-down"></i>
        </div>
        <div id="timer-box">
            <h2 id="timer-label">Current
                <span v-show="store.sessionType === 'session'">Session</span>
                <span v-show="store.sessionType === 'break'">Break</span>
                Count
            </h2>
            <div id="time-left">{{ store.timeLeft }}</div>
            <i id="start_stop" @click="store.toggleTimer" class="button fa-solid"
                :class="{ 'fa-play': store.isPaused, 'fa-pause': !store.isPaused }"></i>
            <i id="reset" @click="store.resetTimer" class="button fa-solid fa-stop"></i>
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

h2 {
    font-size: 2em;
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
    border: 3px solid rgb(241, 243, 250);
    border-radius: 25px;


}

#time-left {
    font-size: 3em;
}

.button {
    font-size: 3em;
    margin: 10px;
}

.button:hover {
    cursor:pointer;
}

.text {
    display: inline;
    font-size: 3em;
}

</style>