<script setup>
import { ref } from 'vue'
import Display from './Display.vue'
import KeyPad from './KeyPad.vue'

</script>

<template>
    <div id="calculator">
    <Display/>
    <KeyPad/>
    </div>
</template>

<style>
    #calculator {
        background-color: white;
        border: 5px solid black;
        border-radius: 25px;
        width: 100%;
        height: 100vh;
    }
</style>