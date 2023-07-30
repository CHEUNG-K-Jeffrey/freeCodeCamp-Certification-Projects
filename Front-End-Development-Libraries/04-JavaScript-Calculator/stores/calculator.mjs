//stores/calculator.js
import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore('calculator', {
    // other options...
    state: () => {
        return { display: "0", buffer: [] }
    },
    getters: {
    },
    actions: {
        input(string) {
            if (this.display === "0") {
                this.display = string;
            } else {
                this.display += string;
            }
        },
        calculate() {
            this.display = "CALCULATED";
        },
        reset() {
            this.display = "0";
        }
    },
})