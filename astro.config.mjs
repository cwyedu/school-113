import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: `https://cwyedu.github.io/`,
	base: `school-113`,
	integrations: [
		starlight({
			title: '揚揚教學網--113學年',
			pagination: false,
			sidebar: [
				{
					label: '網站說明', link: '/des'
				},
				{
					label: '技藝競賽',
					collapsed: true,
					items: [
						{
							label: '文書處理',
							autogenerate: {
								directory: '/skills-competition/word-processing',
							},
						},
						{
							label: '程式設計',
							autogenerate: { directory: '/skills-competition/programming' },
						},
					],
				},
				{
					label: '重補修',
					collapsed: true,
					autogenerate: { directory: '/course-retake/' },
				},
				{
					label: `軟體應用檢定`,
					collapse: true,
					items: [
						{
							label: `丙級`,
							link: '/cert/cert3/'
						},
					],
				},
			],
		}),
	],
});
