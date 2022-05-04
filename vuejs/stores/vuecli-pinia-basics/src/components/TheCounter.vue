<template>
    <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapState } from "pinia";
import { useCounterStore } from "@/stores/counter";

export default {
    computed: {
        ...mapState(useCounterStore, ['finalCounter']),
    },
};
</script>