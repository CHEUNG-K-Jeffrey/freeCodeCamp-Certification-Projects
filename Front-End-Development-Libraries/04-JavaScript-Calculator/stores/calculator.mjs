//stores/calculator.js
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore('calculator', () => {
    const display = computed(() => {
        if (buffer.value.length >= 2 &&
            buffer.value[0] === 0 &&
            buffer.value[1] === "-"
        ) {
            let displayBuffer = [...buffer.value];
            displayBuffer.shift();
            return displayBuffer.join("");
        } else {
            return buffer.value.join("");
        }
    })
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
            //Check for decimal in number string
            if (string === ".") {
                if (/\./.test(buffer.value[lastOffset]) === false) {
                    buffer.value[lastOffset] = buffer.value[lastOffset].concat(string);
                }
                return;
            }
            // Check for operator in last string and handle according
            if (/[-+/*]/.test(buffer.value[lastOffset])) {
                buffer.value.push(string);
            } else {
                buffer.value[lastOffset] = buffer.value[lastOffset].concat(string);
            }
        } else if (/[-+=*/]/.test(string)) { //Handle operator
            //Handle conversion of number string to a number
            if (/[0-9\.]/.test(buffer.value[lastOffset])) {
                buffer.value[lastOffset] = Number(buffer.value[lastOffset]);
            }
            //Detect if last string contains operations and handle it
            if (/[-+=*]/.test(buffer.value[lastOffset])) {
                buffer.value[lastOffset] = buffer.value[lastOffset].concat(string);
            } else {
                buffer.value.push(string);
            }
        }

    }
    function calculate() {
        let lastOffset = buffer.value.length - 1;
        //Check if there is only a number
        if (buffer.value.length === 1) {
            return;
        }
        //Convert last number string to number
        if (/[0-9\.]/.test(buffer.value[lastOffset])) {
            buffer.value[lastOffset] = Number(buffer.value[lastOffset]);
        }
        let newBuffer = buffer.value[0];
        //Traverse buffer look for operation string and perform operations whenever possible
        for (let i = 1; i < buffer.value.length; i++) {
            // Check for operations string
            if (typeof (buffer.value[i]) === "string") {
                let nextNumber = buffer.value[i + 1];
                // Check if there is number ahead
                if (typeof (nextNumber) !== "number") {
                    break;
                }

                let operations = buffer.value[i].split("");
                let operator = operations[operations.length - 1];

                // Handle negative operator
                if (operator === "-" && operations.length >= 2) {
                    operator = operations[operations.length - 2];
                    nextNumber *= -1;
                }

                switch (operator) {
                    case "*":
                        newBuffer = newBuffer * nextNumber;
                        break;
                    case "/":
                        newBuffer = newBuffer / nextNumber;
                        break;
                    case "+":
                        newBuffer = newBuffer + nextNumber;
                        break;
                    case "-":
                        newBuffer = newBuffer - nextNumber;
                        break;
                }

            }
        }
        //Handle negative result
        if (newBuffer < 0) {
            buffer.value = [0, "-", (-1 * newBuffer).toString()]
        } else {
            buffer.value = [newBuffer.toString()];
        }
    }
    function reset() {
        buffer.value = ["0"];
    }

    return { display, buffer, processUserInput, calculate, reset }
})