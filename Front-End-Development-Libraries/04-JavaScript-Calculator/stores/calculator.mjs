//stores/calculator.js
import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore('calculator', {
    // other options...
    state: () => {
        return { buffer: "" }
      },
    getters: {
        display: (state) => state.buffer,
    },
    actions: {
        input(string) {
            this.buffer += string;
        },
        calculate() {
            this.buffer = "CALCULATED";
        },
        reset() {
            this.buffer = "";
        }
    },
})