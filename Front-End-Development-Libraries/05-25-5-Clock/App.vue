<script setup>
import { computed, ref } from 'vue'
import { useTimerStore } from './stores/timer.mjs'

const store = useTimerStore();

store.startTimer();

</script>

<template>
    <h1>25 + 5 Clock</h1>
    <div>
        <h2 id="session-label">Session Length</h2>
        <div id="session-length">{{ store.sessionTime }}</div>
        <div>UP</div>
        <div>Down</div>
    </div>
    <div>
        <h2 id="break-label">Break Length</h2>
        <div id="break-length">{{ store.breakTime }}</div>
        <div>UP</div>
        <div>Down</div>
    </div>
    <div>
        <h2 id="timer-label">Current
            <span v-show="store.sessionType === 'session'">Session</span>
            <span v-show="store.sessionType === 'break'">Break</span>
            Count
        </h2>
        {{ store.count }}
    </div>
</template>

<style></style>