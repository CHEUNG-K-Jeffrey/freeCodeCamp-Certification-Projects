<script setup>

import { useTimerStore } from './stores/timer.mjs'

const store = useTimerStore();

store.startTimer();

</script>

<template>
    <div>25 + 5 Clock</div>
    <div>Session Length</div>
    <div>Break Length</div>
    <div>Session {{ store.count }}</div>

</template>

<style>

</style>