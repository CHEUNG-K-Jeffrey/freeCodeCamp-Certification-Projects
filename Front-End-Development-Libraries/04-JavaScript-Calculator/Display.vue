<script setup>

</script>

<template>
    <div id="display"><slot></slot></div>
</template>

<style>
    #display {
        margin: 5vw;
        border: 1px solid black;
        height: 15vh;
        text-align: right;
        font-size: 10vh;
    }
</style>