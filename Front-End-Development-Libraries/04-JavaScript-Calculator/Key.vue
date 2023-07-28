<script setup>
import { ref } from 'vue'
const test = ref("key");
function onClicked() {

}
</script>

<template>
    <div @click="onClicked" :class="{key: true}"><slot></slot></div>
</template>

<style>
.key {
    display:flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    font-size: 2em;
}

.key:hover {
    background-color: grey;
}

.key:active {
    background-color: green;
}
</style>