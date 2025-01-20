<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Simon B.</title>
</svelte:head>

<div class="app">
	<main>
		{@render children()}
	</main>
</div>
