<script>
import axios from "axios";

export default {
	name: "Home",
	data() {
		return {
			pokemons: [],
			text: "",
			urlIdLookup: {},
		};
	},
	computed: {
		filteredPokemons() {
			if (!this.text) {
				return [];
			}

			return this.pokemons.filter((pokemon) =>
				pokemon.name.includes(this.text)
			);
		},
	},
	methods: {
		focusInput() {
			this.$refs.input.focus();
		}
	},

	mounted() {
		this.focusInput();

		axios
			.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000`)
			.then((response) => {
				this.pokemons = response.data.results;
				this.urlIdLookup = response.data.results.reduce((acc, cur) => {
					const urlParts = cur.url.split("/");
					return {
						...acc,
						[cur.name]: urlParts[urlParts.length - 2],
					};
				}, {});
			});
	},
};
</script>

<template>
	<div class="w-full flex justify-center">
		<input placeholder="Enter Pokemon here" type="text"
		class="mt-10 p-2 border-blue-500 border-2"
		v-model="text" ref="input" />
	</div>

	<div class="mt-10 p-4 flex flex-wrap justify-center">
		<div
			class="ml-4 text-2xl text-blue-400"
			v-for="pokemon in filteredPokemons" :key="pokemon.name"
		>
			<router-link :to="`/about/${urlIdLookup[pokemon.name]}`">
				{{ pokemon.name }}
			</router-link>
		</div>
	</div>
</template>