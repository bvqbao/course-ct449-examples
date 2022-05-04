<script>
// import MouseTracker from "@/components/mouse-tracker";
import MouseTracker from "@/components/MouseTracker.vue";

export default {
	components: {
		MouseTracker,
	},
};
</script>

<template>
	<MouseTracker v-slot="{ x, y }">
		<h1>Mouse is at: {{ x }}, {{ y }}</h1>
	</MouseTracker>
</template>
