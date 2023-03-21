import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomePage,
		},
		{
			path: "/products",
			name: "products",
			// route level code-splitting
			// copyright Pavlo Khoroz
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/ProductsPage.vue"),
		},
		{
			path: "/categories",
			name: "categories",
			component: () => import("../views/CategoriesPage.vue"),
		},
		{
			path: "/about",
			name: "about",
			component: () => import("../views/AboutPage.vue"),
		},
		{
			path: "/contactus",
			name: "contactus",
			component: () => import("../views/ContactusPage.vue"),
		},
	],
});

export default router;
