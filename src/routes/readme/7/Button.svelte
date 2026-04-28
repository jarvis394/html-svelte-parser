<script lang="ts">
	import { base } from '$app/paths';
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	let {
		href,
		type,
		children,
	}: {
		href?: string | undefined;
		type?: HTMLButtonAttributes['type'];
		children?: Snippet;
	} = $props();
</script>

{#if href}
	<a href={href?.startsWith('/') ? base + href : href}>
		{@render children?.()}
	</a>
{:else}
	<button {type}>
		{@render children?.()}
	</button>
{/if}
