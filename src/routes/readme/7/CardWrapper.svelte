<script lang="ts">
	import { Renderer, type RendererProps } from '$lib/index.js';
	import Card from './Card.svelte';

	const {
		content,
	}: {
		title: RendererProps;
		content: RendererProps;
		actions: RendererProps;
	} = $props();
</script>

<Card>
	<Renderer {...content} />
</Card>
