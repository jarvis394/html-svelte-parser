import type { Component } from 'svelte';
import type { ComponentNode, Props } from './types.js';

export const getComponent = (
	node: ComponentNode,
	components: Record<string, Component<any, any, any>>,
) =>
	typeof node.component === 'string'
		? components[node.component]
		: node.component;

export const getComponentProps = (
	node: ComponentNode,
	props: Record<string, Props>,
	components: Record<string, Component<any, any, any>>,
	fallback?: Component<any, any, any>,
) => ({
	...node.props,
	...(typeof node.component === 'string' ? props[node.component] : {}),
	...(node.rendererProps &&
		Object.fromEntries(
			Object.entries(node.rendererProps).map(([propName, nodes]) => [
				propName,
				{ nodes, props, components, fallback },
			]),
		)),
});
