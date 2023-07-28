<script setup>
import Key from './Key.vue'
</script>

<template>
    <div id="keypad">
        <Key id="equals">=</Key>
        <Key id="zero">0</Key>
        <Key id="one">1</Key>
        <Key id="two">2</Key>
        <Key id="three">3</Key>
        <Key id="four">4</Key>
        <Key id="five">5</Key>
        <Key id="six">6</Key>
        <Key id="seven">7</Key>
        <Key id="eight">8</Key>
        <Key id="nine">9</Key>
        <Key id="add">+</Key>
        <Key id="subtract">-</Key>
        <Key id="multiply">*</Key>
        <Key id="divide">/</Key>
        <Key id="decimal">.</Key>
        <Key id="clear">AC</Key>
    </div>
</template>

<style>
#keypad {
    display: grid;
    margin: 5vh;
    border: 1px solid black;
    height: 70vh;
    grid-template-columns: repeat(4, 1fr);
}
</style>