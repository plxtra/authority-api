// @ts-check
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

const canonicalHost = 'plxtra.org';
export const canonicalSite = `https://${canonicalHost}`;

export const githubHost = 'plxtra.github.io';

// https://astro.build/config
export default defineConfig({
    site: canonicalSite,
	base: '/authority-api/',

	trailingSlash: 'always',

	integrations: [
        sitemap({
            // Change sitemap URLs to use custom host supplied to GitHub.
            serialize(item) {
                const url = new URL(item.url);
                if (url.host === githubHost) {
                    url.host = canonicalHost;
                }
                item.url = url.href;
                return item;
            },
        }),

		starlight({
			title: 'Authority API',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/plxtra/' },
				{ icon: 'zulip', label: 'Chat groups', href: 'https://plxtra.zulipchat.com/' },
				{ icon: 'up-caret', label: 'Plxtra Home', href: 'https://plxtra.org/' },
			],
			sidebar: [ // Update to align with your API structure
				{
					label: 'Introduction',
					slug: '',
				},
				{
					label: 'Concepts',
					autogenerate: { directory: 'concepts', collapsed: true },
				},
				{
					label: 'Command Line Tools',
					autogenerate: { directory: 'cli', collapsed: true },
				},
				{
					label: 'REST API',
					autogenerate: { directory: 'rest', collapsed: true },
				},
				{
					label: 'Type Reference',
					autogenerate: { directory: 'proto' },
				},
				{
					label: 'Plxtra',
					link: 'https://plxtra.org/api/authority/',
					attrs: { style: 'font-style: italic' },
				}
			],
		}),
	],
});
