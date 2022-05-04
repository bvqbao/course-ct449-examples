<template>
    <button @click="inc">Add 2</button>
    <button @click="increase({ value: 11 })">Add 11</button>
</template>

<script>
import { useCounterStore } from "@/stores/counter";
import { mapActions } from "pinia";

export default {
    methods: {
        ...mapActions(useCounterStore, {
            inc: 'increment',
            increase: 'increase',
        }),
    },
};
</script>