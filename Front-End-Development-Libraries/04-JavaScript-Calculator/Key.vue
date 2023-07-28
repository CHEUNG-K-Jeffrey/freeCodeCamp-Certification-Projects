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
    border: 1px solid black;
    height: 50px;
}

.key:hover {
    background-color: grey;
}

.key:active {
    background-color: green;
}
</style>