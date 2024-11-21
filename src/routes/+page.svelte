<script lang="ts">
	import { onMount } from 'svelte';
	import Logo from '$lib/components/Logo.svelte';

	let active = $state(false);

	onMount(() => {
		active = true;
	});
</script>

<div class="container mx-auto flex justify-center">
	<Logo {active} />
</div>
