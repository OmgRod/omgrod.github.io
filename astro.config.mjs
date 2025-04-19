// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import path from 'node:path';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'OmgRod',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
		}),
	],
	vite: {
		resolve: {
			alias: {
				'@': path.resolve('./src'),
			}
		}
	},
});
