import axios from "axios";
import { defineStore } from "pinia";

const state = () => {
	return {
		productItems: [],
	}
};

const actions = {
    // http://localhost:8080/api/products -> http://localhost:3000/products
    getProductItems() {
		const state = this;
        axios.get("/api/products").then((response) => {
			state.productItems = response.data;
        });
    },
};

const getters = {
	
};

export const useProductStore = defineStore("product", {
    state,
    actions,
    getters,
});