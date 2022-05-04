import { createWebHistory, createRouter } from "vue-router";
import MovieBlurb from "../components/MovieBlurb.vue";
import MovieService from "../services/movie.service.js";

const routes = [
    {
        path: "/",
        component: {
            name: "index-blurb",
            template: `<h2>Pick a Christopher Nolan movie!</h2>`,
        },
        alias: "/movies",
    },
    {
        path: "/movies/:slug",
        component: MovieBlurb,
        props: (route) => ({
            movie: MovieService.get(route.params.slug),
        }),
    },
    {
        path: "/:pathMatch(.*)*",
        component: {
            name: "not-found-blurb",
            template: `<h2>Not Found :(. Pick a movie from the list!</h2>`,
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
