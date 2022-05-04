<template>
	<div class="movies">
		<h2>Which movie?</h2>
		<router-link
			v-for="movie in movieList"
			:key="movie"
			:to="`/movies/${movie}`"
		>
			/{{ movie }}
		</router-link>
		<router-view />
	</div>
</template>

<script>
export default {
    name: "App",
    components: {},
    data() {
        return {
            movieList: [
                "dunkirk-blurb",
                "interstellar-blurb",
                "the-dark-knight-rises-blurb",
            ],
        };
    },
};
</script>

<style>
@import "./assets/styles.css";
</style>
