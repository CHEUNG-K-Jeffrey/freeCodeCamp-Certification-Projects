//stores/calculator.js
import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore('calculator', {
    // other options...
    state: () => {
        return { buffer: "0" }
      },
    getters: {
        display: (state) => state.buffer,
    },
    actions: {
        input(string) {
            if (this.buffer === "0") {
                this.buffer = string;
            } else {
                this.buffer += string;
            }
        },
        calculate() {
            this.buffer = "CALCULATED";
        },
        reset() {
            this.buffer = "0";
        }
    },
})