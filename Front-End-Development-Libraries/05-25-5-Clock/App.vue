<script setup>
import { computed, ref } from 'vue'
import { useTimerStore } from './stores/timer.mjs'

const store = useTimerStore();

</script>

<template>
    <h1>25 + 5 Clock</h1>
    <div>
        <h2 id="session-label">Session Length</h2>
        <i id="session-increment" @click="store.incrementSession" class="fa-solid fa-chevron-up"></i>
        <div id="session-length">{{ store.sessionTime / 60 }}</div>
        <i id="session-decrement" @click="store.decrementSession" class="fa-solid fa-chevron-down"></i>
    </div>
    <div>
        <h2 id="break-label">Break Length</h2>
        <i id="break-increment" @click="store.incrementBreak" class="fa-solid fa-chevron-up"></i>
        <div id="break-length">{{ store.breakTime / 60 }}</div>
        <i id="break-decrement" @click="store.decrementBreak" class="fa-solid fa-chevron-down"></i>
    </div>
    <div>
        <h2 id="timer-label">Current
            <span v-show="store.sessionType === 'session'">Session</span>
            <span v-show="store.sessionType === 'break'">Break</span>
            Count
        </h2>
        <div id="timer-length">{{ store.timeLeft }}</div>
    </div>
</template>

<style></style>