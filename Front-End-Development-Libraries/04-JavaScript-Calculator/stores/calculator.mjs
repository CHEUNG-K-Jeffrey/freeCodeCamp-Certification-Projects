//stores/calculator.js
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore('calculator', () => {
    const display = computed(() => buffer.value.join(""))
    const buffer = ref(["0"]);

    function processUserInput(string) {
        let lastOffset = buffer.value.length - 1;
        //Process number
        if (/[0-9\.]/.test(string)) {
            //Check for leading zero
            if (buffer.value[lastOffset] === "0") {
                buffer.value[lastOffset] = string;
                return;
            }
            //Check for decimal
            if (string === ".") {
                if (/\./.test(buffer.value[lastOffset]) === false) {
                    buffer.value[lastOffset] = buffer.value[lastOffset].concat(string);
                }
                return;
            }
            buffer.value[lastOffset] = buffer.value[lastOffset].concat(string);
        }

    }
    function calculate() {
        //Check for number only string and convert to number and compute
        buffer.value = ["CALCULATED"];
    }
    function reset() {
        buffer.value = ["0"];
    }

    return { display, buffer, processUserInput, calculate, reset }
})