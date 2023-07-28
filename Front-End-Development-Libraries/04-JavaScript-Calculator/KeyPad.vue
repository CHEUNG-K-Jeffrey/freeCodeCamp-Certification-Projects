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
    gap: 10px;
}

#zero {
    grid-row: 5;
    grid-column: 1/3
}

#decimal {
    grid-row: 5;
    grid-column: 3;
}

#equals {
    grid-row: 6 / 4;
    grid-column: 4;
}

#add {
    grid-row: 4 / 2;
    grid-column: 4;
}

#one {
    grid-row: 4;
}

#two {
    grid-row: 4;
    grid-column: 2;
}

#three {
    grid-row: 4;
    grid-column: 3;
}

#four {
    grid-row: 3;
}

#five {
    grid-row: 3;
    grid-column: 2;
}

#six {
    grid-row: 3;
    grid-column: 3;
}

#seven {
    grid-row: 2;
    grid-column: 1;
}

#eight {
    grid-row: 2;
    grid-column: 2;
}

#nine {
    grid-row: 2;
    grid-column: 3;
}

#clear {
    grid-row: 1;
    grid-column: 1
}

#divide {
    grid-row: 1;
    grid-column: 2;
}

#multiply {
    grid-row: 1;
    grid-column: 3;
}

#subtract {
    grid-row: 1;
    grid-column: 4;
}
</style>