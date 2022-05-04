<script>
import RenderlessCounter from "@/components/RenderlessCounter.vue";

export default {
	components: {
		RenderlessCounter,
	},
};
</script>

<template>
	<RenderlessCounter v-slot="{ count, increment }">
		<p>{{ count }}</p>
		<button @click="increment">Increment</button>
	</RenderlessCounter>
</template>
