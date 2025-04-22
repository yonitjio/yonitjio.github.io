// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';

// https://astro.build/config
export default defineConfig({
	site: 'https://yonitjio.github.io',
	integrations: [
		starlight({
			title: '',
			logo: {
				dark: './src/assets/logo-dark.svg',
				light: './src/assets/logo-light.svg',
				replacesTitle: true,
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/yonitjio' }],
			sidebar: [
				{
					label: 'Exploring Odoo',
					autogenerate: { directory: 'exploring-odoo' },
				},
				// {
				// 	label: 'Nuido',
				// 	autogenerate: { directory: 'nuido' },
				// }
			],
			plugins: [starlightThemeNova()],
		}),
	],
});
