import type { Component } from 'svelte';
import type { Node } from './types.js';

export const loadComponents = async <T extends string = string>(
	{ nodes, components: componentNames }: { nodes: Node[]; components: T[] },
	loader: (componentName: T) => Promise<Component<any, any, any> | { default: Component<any, any, any> }>,
) => {
	const components: Record<T, Component<any, any, any>> = {} as Record<T, Component<any, any, any>>;
	const promises: Promise<Component<any, any, any>>[] = [];

	for (const componentName of componentNames) {
		promises.push(
			loader(componentName).then(
				mod =>
					(components[componentName] = 'default' in mod ? mod.default : mod),
			),
		);
	}

	await Promise.all(promises);
	return { nodes, components };
};
