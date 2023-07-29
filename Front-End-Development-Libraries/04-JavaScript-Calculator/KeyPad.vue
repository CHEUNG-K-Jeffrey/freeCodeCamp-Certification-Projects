<script setup>
import Key from './Key.vue'
</script>

<template>
    <div id="keypad">
        <Key id="equals" keyName="="/>
        <Key id="zero" keyName="0"/>
        <Key id="one" keyName="1"/>
        <Key id="two" keyName="2"/>
        <Key id="three" keyName="3"/>
        <Key id="four" keyName="4"/>
        <Key id="five" keyName="5"/>
        <Key id="six" keyName="6"/>
        <Key id="seven" keyName="7"/>
        <Key id="eight" keyName="8"/>
        <Key id="nine" keyName="9"/>
        <Key id="add" keyName="+"/>
        <Key id="subtract" keyName="-"/>
        <Key id="multiply" keyName="*"/>
        <Key id="divide" keyName="/"/>
        <Key id="decimal" keyName="."/>
        <Key id="clear" keyName="AC"/>
    </div>
</template>

<style>
#keypad {
    display: grid;
    margin: 5vh;
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