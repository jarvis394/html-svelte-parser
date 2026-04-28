<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		attributes,
		children,
	}: {
		attributes: Record<string, string>;
		children?: Snippet;
	} = $props();
</script>

<g {...attributes}>{@render children?.()}</g>
