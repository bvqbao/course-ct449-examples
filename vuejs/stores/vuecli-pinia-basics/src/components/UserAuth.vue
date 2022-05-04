<template>
    <button @click="login" v-if="!isAuth">Login</button>
    <button @click="logout" v-if="isAuth">Logout</button>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth";

export default {
    methods: {
		...mapActions(useAuthStore, ['login', 'logout'])
    },
    computed: {
		...mapState(useAuthStore, {
			isAuth: store => store.userIsAuthenticated
		})
    },
};
</script>