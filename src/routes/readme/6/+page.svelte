<script lang="ts">
	import { Renderer } from '$lib/index.js';

	const { data } = $props();
</script>

<Renderer {...data.content} />

<!--
	Equivalent to:

	<p><Button class="btn" href="https://svelte.dev/">Svelte</Button> rocks</p>
-->
