<script setup>
import { ref } from 'vue'
const isSelectable = ref(true);
function onClicked() {

}
</script>

<template>
    <div @click="onClicked" :class="{key: true, selectable: isSelectable}"><slot></slot></div>
</template>

<style>
.key {
    display:flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    font-size: 2em;
}

.selectable:hover {
    background-color: grey;
}

.selectable:active {
    background-color: green;
}
</style>