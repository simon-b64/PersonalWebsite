<script lang="ts">
	interface Props {
		code: number;
	}

	let { code }: Props = $props();

	const codeMapping = new Map<number, string>([
		[404, 'Not found'],
		[500, 'Internal error']
	]);
</script>

<h1 class="mt-4 text-center text-5xl font-thin tracking-[1rem]">
	{code} | {codeMapping.get(code) ?? 'Internal error'}
</h1>
