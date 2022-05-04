import { defineStore } from "pinia"

export const useAuthStore = defineStore("auth", {
	state: () => {
		return {
			isLoggedIn: false
		};
	},
	actions: {
		login() {
			this.isLoggedIn = true;
		},
		logout() {
			this.isLoggedIn = false;
		}
	},
	getters: {
		userIsAuthenticated(state) {
			return state.isLoggedIn;
		}
	}
});