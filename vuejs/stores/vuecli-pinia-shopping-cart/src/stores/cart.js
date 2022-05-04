import axios from "axios";
import { defineStore } from "pinia";

const state = () => {
	return {
		cartItems: [],
	}
};

const actions = {
    // http://localhost:8080/api/cart -> http://localhost:3000/cart
    getCartItems() {
        axios.get("/api/cart").then((response) => {
			this.cartItems = response.data
        });
    },
    addCartItem(cartItem) {
        axios.post("/api/cart", cartItem).then((response) => {
            this.cartItems = response.data
        });
    },
    removeCartItem(cartItem) {
        axios.post("/api/cart/delete", cartItem).then((response) => {
            this.cartItems = response.data
        });
    },
    removeAllCartItems() {
        axios.post("/api/cart/delete/all").then((response) => {
            this.cartItems = response.data
        });
    },
};

const getters = {
    cartTotal: (state) => {
        return state.cartItems
            .reduce((acc, cartItem) => {
                return cartItem.quantity * cartItem.price + acc;
            }, 0)
            .toFixed(2);
    },
    cartQuantity: (state) => {
        return state.cartItems.reduce((acc, cartItem) => {
            return cartItem.quantity + acc;
        }, 0);
    },
};

export const useCartStore = defineStore("cart", {
    state,
    actions,
    getters,
});
