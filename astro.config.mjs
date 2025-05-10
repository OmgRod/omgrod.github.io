// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import path from 'node:path';

import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: "https://omgrod.me",
    integrations: [starlight({
        title: 'OmgRod',
        // social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/OmgRod/omgrod.github.io' }],
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
        }), sentry(), spotlightjs(), sitemap({
			changefreq: 'always',
			priority: 1,

		})],
    vite: {
        resolve: {
            alias: {
                '@': path.resolve('./src'),
            }
        }
    },

});