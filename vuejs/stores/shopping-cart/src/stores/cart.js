import axios from "axios";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
	state() {
		return {
			cartItems: [],
		};
	},

	actions: {
		getCartItems() {
			axios.get("/api/cart").then((response) => {
				this.cartItems = response.data;
			});
		},
		addCartItem(product) {
			axios.post("/api/cart", product).then((response) => {
				this.cartItems = response.data;
			});
		},
		removeCartItem(product) {
			axios.post("/api/cart/delete", product).then((response) => {
				this.cartItems = response.data;
			});
		},
		removeAllCartItems() {
			axios.post("/api/cart/delete/all").then((response) => {
				this.cartItems = response.data;
			});
		},
	},
	getters: {
		cartTotal: (state) => {
			let total = 0;
			state.cartItems.forEach((item) => {
				total += item.price * item.quantity;
			});
			return total.toFixed(2);
		},
		cartQuantity: (state) => {
			let quantity = 0;
			state.cartItems.forEach((item) => {
				quantity += item.quantity;
			});
			return quantity;
		},
	},
});
