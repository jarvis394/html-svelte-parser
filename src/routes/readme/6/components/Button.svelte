<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	let {
		href,
		type,
		children,
		...rest
	}: {
		href?: string;
		type?: HTMLButtonAttributes['type'];
		children?: Snippet;
	} & Record<string, any> = $props();
</script>

{#if href}
	<a {...rest} {href}>{@render children?.()}</a>
{:else}
	<button {...rest} {type}>{@render children?.()}</button>
{/if}
