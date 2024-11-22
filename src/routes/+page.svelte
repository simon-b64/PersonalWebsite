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

<div class="flex h-screen w-screen items-center justify-center">
	<div
		class="mx-auto flex max-w-[893px] flex-wrap items-center justify-center gap-[100px] px-4 md:flex-nowrap"
	>
		<Logo {active} height="295px" />
		<div class="textbox flex flex-col gap-4 text-center md:text-left">
			<h1 class="text-6xl tracking-[12.8px]">Simon B.</h1>
			<h3 class="max-w-[500px] text-2xl leading-relaxed">
				Autodidact software engineer trying to fuel new innovation inside the technology sector.
			</h3>
		</div>
	</div>
</div>
