<script lang="ts">
	import type { Attributes } from '$lib/types.js';
	import type { HTMLAttributes } from 'svelte/elements';

	const {
		attributes = {},
		a = '',
		children,
	}: {
		attributes?: Attributes;
		a?: string;
	} & HTMLAttributes<HTMLAnchorElement> = $props();
</script>

<test-link {...attributes}>{a} {@render children?.()}</test-link>
