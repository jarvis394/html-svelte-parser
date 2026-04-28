<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		attributes = {},
		children,
	}: {
		attributes: Record<string, string>;
		children?: Snippet;
	} = $props();
</script>

<rect {...attributes}>{@render children?.()}</rect>
