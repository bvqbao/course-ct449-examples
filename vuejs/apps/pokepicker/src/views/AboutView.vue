<script>
import axios from "axios";

export default {
    name: "AboutView",
    data() {
        return {
            pokemon: null,
            message: "",
        };
    },
    created() {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.slug}`)
            .then((response) => {
                this.message = "";
                this.pokemon = response.data;
            })
            .catch((error) => {
                console.log(error);
                this.message = "Pokemon not found!";
            });
    },
};
</script>

<template>
    <div>
        <h3 v-if="message">{{ message }}</h3>
        <div
			v-if="pokemon"
			class="w-4/12 m-auto bg-purple-100 mt-4 shadow-2xl flex justify-center flex-col items-center"
		>
            <h3 class="text-2xl text-green-900 uppercase">{{ pokemon.name }}</h3>
            <div class="flex justify-center">
                <img class="w-48" :src="pokemon.sprites.front_shiny" alt="" />
                <img class="w-48" :src="pokemon.sprites.back_shiny" alt="" />
            </div>
            <h3 class="text-yellow-400">Types</h3>
            <div v-for="type in pokemon.types" :key="type.type.name">
                <h5 class="text-blue-900">{{ type.type.name }}</h5>
            </div>
        </div>
    </div>
</template>

<style></style>
