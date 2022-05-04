<script>
import { useMouse } from "@/composables/mouse";

export default {
	setup() {
		const { x, y } = useMouse();
		return { x, y };
	},
};
</script>

<template>
	<h1>Mouse position is at: {{ x }}, {{ y }}</h1>
</template>

<!--
<script setup>
import { useMouse } from "@/composables/mouse";

const { x, y } = useMouse();
</script>
-->
