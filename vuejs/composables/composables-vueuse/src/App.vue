<script>
import { useMouse, useTitle, useNow, useUrlSearchParams } from "@vueuse/core";
export default {
	setup() {
		const { x, y } = useMouse();
		const title = useTitle();
		const now = useNow();
		const params = useUrlSearchParams("history");

		return {
			x,
			y,
			title,
			now,
			params,
		};
	},
};
</script>

<template>
	<h1>Mouse position is at: {{ x }}, {{ y }}</h1>
	Set page title: <input type="text" v-model="title" />
	<div>Now: {{ now }}</div>
	<div>Query Params:</div>
	<ol>
		<li v-for="(value, name) in params" :key="name">
			{{ name }}: {{ value }}
		</li>
	</ol>
</template>
