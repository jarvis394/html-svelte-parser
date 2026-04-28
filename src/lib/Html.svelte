<script lang="ts">
	import type { Component } from 'svelte';
	import Renderer from './Renderer.svelte';
	import { parse } from './parse.js';
	import type { Options, Props as ComponentProps } from './types.js';

	export interface HtmlProps extends Options {
		/** The html string to parse */
		html: string;

		/** Object of components in the form of `{ componentName: component }` */
		components?: Record<string, Component<any, any, any>>;

		/** Object of component props in the form of `{ componentName: Props }` */
		props?: Record<string, ComponentProps>;

		/** A fallback component */
		fallback?: Component<any, any, any>;
	}

	export type $$Props = HtmlProps;

	const {
		html,
		components = {},
		props = {},
		fallback,
		...rest
	}: HtmlProps = $props();
</script>

<Renderer nodes={parse(html, rest).nodes} {components} {props} {fallback} />
