<script setup>
	import { RouterLink, RouterView } from "vue-router";
	import Header from "./components/Header.vue";
</script>

<template>
	<Header />
	<RouterView />
</template>

<style lang="scss">
	.container {
		padding-left: 20px;
		padding-right: 20px;
		margin: 0 auto;
		max-width: 1180px;
		width: 100%;
		@media (min-width: 1800px) {
			max-width: 1620px;
		}
	}
</style>
