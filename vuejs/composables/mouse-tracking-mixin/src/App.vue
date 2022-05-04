<script>
import mouse from "@/shared/mouse";

export default {
	mixins: [mouse],
};
</script>

<template>
	<h1>Mouse position is at: {{ x }}, {{ y }}</h1>
</template>
