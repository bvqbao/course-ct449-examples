<template>
    <div>
        <div v-if="movie">
            <h2>{{ movie.title }}</h2>
            <p class="movies__description">{{ movie.descr }}</p>
        </div>
        <h2 v-else>Not Found :(. Pick a movie from the list!</h2>
    </div>
</template>

<script>
export default {
    name: "MovieBlurb",
    props: {
        movie: {
            title: String,
            descr: String,
        },
    },
};
</script>
