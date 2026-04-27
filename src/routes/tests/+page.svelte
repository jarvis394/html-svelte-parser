<script lang="ts">
	import { Renderer, type RendererProps } from '$lib/index.js';

	const { data } = $props<{
		data: { withHtmlNodes: RendererProps; withoutHtmlNodes: RendererProps };
	}>();
</script>

<div id="with-html-nodes"><Renderer {...data.withHtmlNodes} /></div>

<div id="without-html-nodes"><Renderer {...data.withoutHtmlNodes} /></div>
