<script lang="ts">
	// Funny formatting because we don't want to render any extra whitespace
	// Wrap `HtmlNode`s with an extra `g` (see https://github.com/sveltejs/svelte/issues/5764#issuecomment-753292326)
	import type { RendererProps } from './types.js';
	import { NodeType } from './types.js';
	import { getComponent, getComponentProps } from './utils.js';
	import SvgRenderer from './SvgRenderer.svelte'

	const { nodes, components = {}, props = {}, fallback }: RendererProps = $props();
</script>{#each nodes as node}{#if node.type === NodeType.Text}{node.data}{:else if node.type === NodeType.Html}<g>{@html node.data}</g>{:else if node.type === NodeType.Tag}{#if node.children?.length}<svelte:element this={node.tag} {...node.attributes}><SvgRenderer nodes={node.children} {components} {props} {fallback} /></svelte:element>{:else}<svelte:element this={node.tag} {...node.attributes} />{/if}{:else if node.children?.length}{@const Component = getComponent(node, components) || fallback}<Component {...getComponentProps(node, props, components, fallback)}><SvgRenderer nodes={node.children} {components} {props} {fallback} /></Component>{:else}{@const Component = getComponent(node, components) || fallback}<Component {...getComponentProps(node, props, components, fallback)} />{/if}{/each}