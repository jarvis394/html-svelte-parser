<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		title,
		actions,
	}: {
		children?: Snippet;
		title?: Snippet;
		actions?: Snippet;
	} = $props();
</script>

<div class="card">
	{#if title}
		<div class="title">{@render title?.()}</div>
	{/if}

	<div class="content">{@render children?.()}</div>

	{#if actions}
		<div class="actions">
			{@render actions?.()}
		</div>
	{/if}
</div>
