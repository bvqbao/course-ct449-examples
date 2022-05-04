<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <FormValidationSimple /> -->
    <!-- <FormGlobalValidators /> -->
	<FormValidationYup />
</template>

<script>
// import FormValidationSimple from './components/FormValidationSimple.vue'
// import FormGlobalValidators from './components/FormGlobalValidators.vue';
import FormValidationYup from './components/FormValidationYup.vue';

export default {
    name: "App",
    components: {
        FormValidationYup,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
