<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Simon B.</title>
</svelte:head>

<div class="app">
	<Header />

	<main class="landing-page min-h-screen">
		{@render children()}
	</main>
</div>

<style>
	.landing-page {
		background: radial-gradient(158.02% 50% at 50% 50%, #fff 0%, #d1d1d1 100%);
	}
</style>
