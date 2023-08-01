<script setup>
import { ref } from 'vue'
import { useCalculatorStore } from './stores/calculator.mjs'

const props = defineProps({
  keyName: String,
  type: String
});
const isSelectable = ref(true);
const store = useCalculatorStore();

function onClicked() {
    if (props.type == null) {
        store.processUserInput(this.props.keyName);
    } else {
        store[props.type]();
    }
}
</script>

<template>
    <div @click="onClicked()" :class="{key: true, selectable: isSelectable}">{{ keyName }}</div>
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