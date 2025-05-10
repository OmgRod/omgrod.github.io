// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import path from 'node:path';

import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'OmgRod',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
        pagination: false,
        // sidebar: [
        // 	{
        // 		label: 'Minecraft',
        // 		slug: 'minecraft'
        // 	},
        // ]
        components: {
            SiteTitle: './src/starlightOverrides/SiteTitle.astro',
        },
		}), sentry(), spotlightjs()],
    vite: {
        resolve: {
            alias: {
                '@': path.resolve('./src'),
            }
        }
    },

});