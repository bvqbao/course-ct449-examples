import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import sourceData from "@/data.json";

const getDestinationFromId = (id) => {
	return sourceData.destinations.find(
		(destination) => destination.id === parseInt(id)
	);
};

const toNotFoundRoute = (to) => {
	return {
		name: "NotFound",
		params: {
			pathMatch: to.path.split("/").slice(1),
		},
		query: to.query,
		hash: to.hash,
	};
};

const routes = [
	{ path: "/", name: "Home", component: Home, alias: "/home" },
	{
		path: "/dashboard",
		name: "Dashboard",
		components: {
			LeftSidebar: () => import("@/components/LeftSideBar.vue"),
			default: () => import("@/views/Dashboard.vue"),
		},
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/Login.vue"),
	},
	{
		path: "/invoices",
		name: "invoices",
		components: {
			LeftSidebar: () => import("@/components/LeftSideBar.vue"),
			default: () => import("@/views/Invoices.vue"),
		},
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/destination/:id",
		name: "destination.id",
		beforeEnter(to, from) {
			const exists = getDestinationFromId(to.params.id);
			if (!exists) {
				return toNotFoundRoute(to);
			}

			return {
				name: "destination.show",
				params: {
					...to.params,
					slug: exists.slug,
				},
				query: to.query,
				hash: to.hash,
			};
		},
	},
	{
		path: "/destination/:id/:slug",
		name: "destination.show",
		component: () => import("@/views/DestinationShow.vue"),
		props: (route) => ({
			...route.params,
			id: parseInt(route.params.id),
		}),
		beforeEnter(to, from) {
			if (from.name === "destination.id") {
				return true;
			}

			const exists = getDestinationFromId(to.params.id);
			if (!exists) {
				return toNotFoundRoute(to);
			}
		},
		children: [
			{
				path: ":experienceSlug",
				name: "experience.show",
				component: () => import("@/views/ExperienceShow.vue"),
				props: (route) => ({
					...route.params,
					id: parseInt(route.params.id),
				}),
			},
		],
	},
	,
	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: () => import("@/views/NotFound.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from) => {
	if (to.meta.requiresAuth && !window.user) {
		return { name: "login", query: { redirect: to.fullPath } };
	}
});

export default router;
