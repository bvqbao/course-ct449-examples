<template>
    <base-container title="Pinia" v-if="isAuth">
        <the-counter></the-counter>
        <favorite-value></favorite-value>
        <button @click="addOne({value: 10})">Add 10</button>
        <change-counter></change-counter>
    </base-container>
    <base-container title="Auth">
        <user-auth></user-auth>
    </base-container>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "@/stores/counter";
import { useAuthStore } from "@/stores/auth";

import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
    components: {
        BaseContainer,
        TheCounter,
        ChangeCounter,
        FavoriteValue,
        UserAuth,
    },
    computed: {
		...mapState(useAuthStore, {
			isAuth: store => store.userIsAuthenticated
		})
    },
    methods: {
		...mapActions(useCounterStore, {
			addOne: 'increase'
		}),
    },
};
</script>

<style>
* {
    box-sizing: border-box;
}

html {
    font-family: sans-serif;
}

body {
    margin: 0;
}
</style>