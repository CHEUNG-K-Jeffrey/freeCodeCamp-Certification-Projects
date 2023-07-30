//stores/calculator.js
import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore('calculator', {
    // other options...
    state: () => {
        return { display: '0', buffer: '["0"]' }
    },
    getters: {
    },
    actions: {
        input(string) {
            let newBuffer = JSON.parse(this.buffer);
            newBuffer.push(string)
            this.buffer = JSON.stringify(newBuffer);
            this.display = JSON.parse(this.buffer).join("");
        },
        calculate() {
            this.display = "CALCULATED";
        },
        reset() {
            this.buffer = '["0"]';
            this.display = "0";
        }
    },
})