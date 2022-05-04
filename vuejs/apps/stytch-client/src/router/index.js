import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import vm from "@/main";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/Login.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach(async (to, from) => {
	if (to.query.session_token) {
		localStorage.setItem("session_token", to.query.session_token);
		router.replace({ query: null });
	}

	const token = localStorage.getItem("session_token") || null;

	if (to.meta.requiresAuth) {
		if (token) {
			const response = await fetch("http://localhost:5000/verify", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					session_token: token,
				}),
			}).then((res) => res.json());

			if (!response.success) {
				localStorage.removeItem("session_token");
				vm.$toast.error("Something went wrong. Please try again.");
				return { name: "login" };
			}
		} else {
			return { name: "login" };
		}
	} else if (to.name === "login") {
		if (token) {
			const response = await fetch("http://localhost:5000/verify", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					session_token: token,
				}),
			}).then((res) => res.json());

			if (response.success) {
				return { name: "Home" };
			}
		}
	}
});

export default router;
