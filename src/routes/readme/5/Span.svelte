<script lang="ts">
	import type { Attributes } from '$lib/types.js';
	import type { Snippet } from 'svelte';

	let {
		attributes,
		children,
	}: {
		attributes: Attributes;
		children?: Snippet;
	} = $props();
</script>

<span {...attributes}>
	{@render children?.()}
</span>
