import { defineStore } from "pinia"

export const useCounterStore = defineStore("counter", {
	state: () => {
		return {
			counter: 0
		};
	},
	actions: {
		increment() {
			const state = this;
			setTimeout(function () {
				// console.log("before", state.counter);
				state.counter = state.counter + 2;
				// console.log("after", state.counter);
			}, 2000);
		},
		increase(payload) {
			console.log(payload);
			this.counter = this.counter + payload.value;
		}
	},
	getters: {
		finalCounter(state) {
			return state.counter * 3;
		},
		normalizedCounter() {
			const finalCounter = this.finalCounter;
			if (finalCounter < 0) {
				return 0;
			}
			if (finalCounter > 100) {
				return 100;
			}
			return finalCounter;
		}
	}
});