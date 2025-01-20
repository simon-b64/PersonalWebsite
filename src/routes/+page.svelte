<script lang="ts">
	import { onMount } from 'svelte';
	import Logo from '$lib/components/Logo.svelte';

	let active = $state(false);

	onMount(() => {
		active = true;
	});
</script>

<svelte:head>
	<title>Home | Simon B.</title>
</svelte:head>

<section class="hero-section">
	<Logo {active} height="19rem" />
	<div class="wip-section">
		<search>Work in progress...</search>
	</div>
</section>

<style>
	.hero-section {
		background: linear-gradient(252deg, var(--bg-color-primary) 0%, var(--bg-color-secondary) 100%);
		height: 100vh;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	.wip-section {
		position: absolute;
		bottom: 1rem;
	}
</style>
