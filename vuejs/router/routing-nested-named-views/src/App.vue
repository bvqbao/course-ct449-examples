<template>
	<h1>Nested Named Views</h1>
	<router-view></router-view>
</template>

<script>
export default {
	name: "App",
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}

.router-link-active {
	color: orange;
}

.router-link-exact-active {
	color: crimson;
}

.us {
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: auto;
	grid-template-areas:
		"header header"
		"nav content"
		"nav helper";
}

h2 {
	grid-area: header;
}

.us__nav {
	grid-area: nav;
	border: 1px dotted;
	margin-right: 0.75rem;
	padding: 0.3rem;
}
.us__content {
	grid-area: content;
}
.us__content--helper {
	grid-area: helper;
}
</style>

<style scoped>
ul {
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0;
}

li:not(:last-of-type) {
	margin-right: 1rem;
}
</style>