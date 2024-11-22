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

	<main>
		{@render children()}
	</main>
</div>
