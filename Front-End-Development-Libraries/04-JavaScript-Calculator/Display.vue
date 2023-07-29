<script setup>
import { ref, watch } from 'vue'
import { useCalculatorStore } from './stores/calculator.mjs'

// access the `store` variable anywhere in the component ✨
const store = useCalculatorStore();
const text = ref("");

text.value = store.buffer;

watch(store, (store, prevStore) => {
  text.value = store.buffer;
}
)

</script>

<template>
    <div id="display">{{ text }}</div>
</template>

<style>
    #display {
        margin: 5vh;
        border: 1px solid black;
        height: 15vh;
        text-align: right;
        font-size: 10vh;
    }
</style>