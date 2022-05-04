<template>
    <h3>{{ counter }}</h3>
    <p>We do more...</p>
</template>

<script>
import { mapState } from "pinia";
import { useCounterStore } from "@/stores/counter";

export default {
    computed: {
		...mapState(useCounterStore, { counter: 'normalizedCounter' })
    },
};
</script>