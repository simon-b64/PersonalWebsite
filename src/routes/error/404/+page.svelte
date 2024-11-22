<script lang="ts">
	import ErrorDisplay from '$lib/components/ErrorDisplay.svelte';
</script>

<svelte:head>
	<title>404 | Simon B.</title>
</svelte:head>

<div class="absolute h-screen w-screen">
	<ErrorDisplay code={404} />
</div>
