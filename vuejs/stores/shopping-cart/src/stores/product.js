import axios from "axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
	state() {
		return {
			productItems: [],
		};
	},

	actions: {
		getProductItems() {
			axios.get("/api/products").then((response) => {
				this.productItems = response.data;
			});
		},
	},
});
