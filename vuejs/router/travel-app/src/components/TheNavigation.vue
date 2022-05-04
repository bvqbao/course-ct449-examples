<script>
import sourceData from "@/data.json";

export default {
	data() {
		return {
			destinations: sourceData.destinations
		}
	}
}
</script>

<template>
	<div id="nav">
		<router-link id="logo" to="/">Travel App</router-link>
		<router-link
			v-for="destination in destinations"
			:key="destination.name"
			:to="{
				name: 'destination.show',
				params: { id: destination.id, slug: destination.slug }
			}"
		>{{ destination.name }}
		</router-link>
		<router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
	</div>
</template>
