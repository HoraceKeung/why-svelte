import App from './App.svelte'

const app = new App({
	target: document.body,
	props: {
		resources: [
			{
				title: 'Introduction to Svelte',
				url: 'https://daveceddia.com/svelte-intro/',
				date: '24 Jul 2019',
				tags: [
					'text',
					'vue',
					'react',
					'angular'
				]
			},
			{
				title: 'Web Development Simplified with Svelte',
				url: 'https://objectcomputing.com/resources/publications/sett/july-2019-web-dev-simplified-with-svelte',
				date: '24 Jul 2019',
				tags: [
					'text',
					'sapper',
					'vue',
					'react',
					'angular',
					'nativescript'
				]
			},
			{
				title: 'Svelte for Angular Developers',
				url: 'https://blog.bitsrc.io/svelte-for-angular-developers-34012b93420c',
				date: '24 Jul 2019',
				tags: [
					'text',
					'vue',
					'react',
					'angular'
				]
			},
			{
				title: 'Svelte: Why You Should Take a Look',
				url: 'http://mandax.com.br/post/svelte-why-you-should-take-a-look/',
				date: '22 Jul 2019',
				tags: [
					'text'
				]
			},
			{
				title: 'Exploring Sapper + Svelte: A quick tutorial',
				url: 'https://blog.logrocket.com/exploring-sapper-svelte-a-quick-tutorial/',
				date: '2 Jul 2019',
				tags: [
					'text',
					'sapper',
					'react'
				]
			},
			{
				title: "Svelte is the most beautiful web framework I've ever seen",
				url: 'https://dev.to/jesseskinner/svelte-is-the-most-beautiful-web-framework-i-ve-ever-seen-325f',
				date: '29 Jun 2019',
				tags: [
					'text'
				]
			},
			{
				title: 'Why SvelteJS may be the best framework for new web devs',
				url: 'https://dev.to/bholmesdev/why-sveltejs-may-be-the-best-framework-for-new-web-devs-205i',
				date: '28 Jun 2019',
				tags: [
					'text',
					'vue',
					'react',
					'angular'
				]
			},
			{
				title: 'Getting started with Svelte',
				url: 'https://blog.knoldus.com/getting-started-with-svelte/',
				date: '27 Jun 2019',
				tags: [
					'text',
					'vue',
					'react'
				]
			},
			{
				title: 'Why Svelte is the best JS "framework"',
				url: 'https://www.youtube.com/watch?v=rMBusx68ujY',
				date: '26 Jun 2019',
				tags: [
					'video'
				]
			},
			{
				title: 'The importance of elegance',
				url: 'https://www.varvet.com/blog/the-importance-of-elegance/',
				date: '25 Jun 2019',
				tags: [
					'text'
				]
			},
			{
				title: "Svelte 3's radical new approach to web frameworks",
				url: 'https://devmode.fm/episodes/svelte-3s-radical-new-approach-to-web-frameworks',
				date: '24 Jun 2019',
				tags: [
					'audio'
				]
			},
			{
				title: "Reactive user interfaces using SvelteJS",
				url: 'https://denisjakus.com/reactive-user-interfaces-using-sveltejs/',
				date: '19 Jun 2019',
				tags: [
					'text'
				]
			},
			{
				title: 'Build a blog with Sapper and Svelte',
				url: 'https://mattcrouch.github.io/blog/2019/05/build-a-blog-with-sapper-and-svelte/',
				date: '28 May 2019',
				tags: [
					'text',
					'sapper',
					'vue',
					'react'
				]
			},
			{
				title: 'Svelte.js: Two way binding',
				url: 'https://medium.com/@Roli_Dori/svelte-js-two-way-binding-ded98a89af1c',
				date: '25 May 2019',
				tags: [
					'text',
					'vue',
					'react'
				]
			},
			{
				title: 'Truly reactive programming with Svelte 3.0',
				url: 'https://blog.logrocket.com/truly-reactive-programming-with-svelte-3-0-321b49b75969/',
				date: '21 May 2019',
				tags: [
					'text',
					'react',
					'angular'
				]
			},
			{
				title: 'Svelte vs React vs Angular vs Vue',
				url: 'https://www.youtube.com/watch?v=DZyWNS4fVE0',
				date: '15 May 2019',
				tags: [
					'video',
					'vue',
					'react',
					'angular'
				]
			},
			{
				title: 'Svelte 3 Front-End Framework Moves Reactivity into the JavaScript Language, Q&A with Rich Harris',
				url: 'https://www.infoq.com/news/2019/05/svelte-3-interview-rich-harris/',
				date: '6 May 2019',
				tags: [
					'text',
					'sapper',
					'vue',
					'react',
					'nativescript'
				]
			},
			{
				title: 'Svelte 3 Is All Kinds Of Awesome...',
				url: 'https://www.youtube.com/watch?v=efAMY1JvrcQ',
				date: '30 Apr 2019',
				tags: [
					'video'
				]
			},
			{
				title: 'Svelte 3 Reaction & QuickStart Tutorial',
				url: 'https://www.youtube.com/watch?v=043h4ugAj4c',
				date: '25 Apr 2019',
				tags: [
					'video',
					'vue',
					'react',
					'angular'
				]
			},
			{
				title: 'Rich Harris - Rethinking reactivity',
				url: 'https://www.youtube.com/watch?v=AdNJ3fydeao',
				date: '22 Apr 2019',
				tags: [
					'video',
					'sapper',
					'vue',
					'react',
					'nativescript'
				]
			}
		]
	}
})

export default app
