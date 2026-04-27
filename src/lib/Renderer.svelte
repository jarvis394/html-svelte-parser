<script lang="ts">
	// Funny formatting because we don't want to render any extra whitespace
	// Special handling of `svg` tags to let svelte know we are in svg namespace
	import SvgRenderer from './SvgRenderer.svelte';
	import type { RendererProps } from './types.js';
	import { NodeType } from './types.js';
	import { getComponent, getComponentProps } from './utils.js';
	import Renderer from './Renderer.svelte';

	const { nodes, components = {}, props = {}, fallback }: RendererProps = $props();
</script>{#each nodes as node}{#if node.type === NodeType.Text}{node.data}{:else if node.type === NodeType.Html}{@html node.data}{:else if node.type === NodeType.Tag}{#if node.tag === 'svg'}<svg {...node.attributes}><SvgRenderer nodes={node.children || []} {components} {props} {fallback} /></svg>{:else if node.children?.length}<svelte:element this={node.tag} {...node.attributes}><Renderer nodes={node.children} {components} {props} {fallback} /></svelte:element>{:else}<svelte:element this={node.tag} {...node.attributes} />{/if}{:else if node.children?.length}{@const Component = getComponent(node, components) || fallback}<Component {...getComponentProps(node, props, components, fallback)}><Renderer nodes={node.children} {components} {props} {fallback} /></Component>{:else}{@const Component = getComponent(node, components) || fallback}<Component {...getComponentProps(node, props, components, fallback)} />{/if}{/each}
