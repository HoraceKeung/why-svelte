<div class="pt-16">
	<div class="bg-white h-16 w-full fixed left-0 top-0 shadow-md z-50">
		<div class="container h-full flex">
			<div class="my-auto mr-2 sm:mr-4"><img class="h-8 sm:h-12 min-w-8 cursor-pointer" src="icon.png" alt="logo"></div>
			<h1 class="my-auto text-xl sm:text-3xl whitespace-no-wrap font-bold">Why Svelte</h1>
		</div>
	</div>
	<div class="container pt-8">
		<div class="flex flex-wrap -mx-2">
			{#each resources as r}
			<div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-6">
				<div class="shadow-md grad w-full h-full rounded flex flex-col overflow-hidden">
					<a target="_blank" href={r.link}><div class="h-48 bg-contain bg-center bg-no-repeat" style=""/></a>
					<div class="p-4 flex flex-col flex-1 bg-white">
						<p class="text-sm mb-2">{r.date}</p>
						<a target="_blank" href={r.link} class="text-xl font-bold mb-2 leading-tight">{r.title}</a>
						<div class="flex flex-wrap -mx-1 mb-4">
							{#each r.tags as t}
							<div class="px-1">
								<button class="px-1 capitalize bg-flash text-white rounded text-sm">{t}</button>
							</div>
							{/each}
						</div>
						<p class="leading-tight mb-6"></p>
						<a target="_blank" href={r.link} class="mx-auto mt-auto">
							<button class="bg-prime text-white w-32 py-2 px-4 rounded">Read More</button>
						</a>
					</div>
				</div>
			</div>
			{/each}
		</div>
	</div>
</div>

<script>
const resources = [
	{
		title: 'Introduction to Svelte',
		link: 'https://daveceddia.com/svelte-intro/',
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
		link: 'https://objectcomputing.com/resources/publications/sett/july-2019-web-dev-simplified-with-svelte',
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
		link: 'https://blog.bitsrc.io/svelte-for-angular-developers-34012b93420c',
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
		link: 'http://mandax.com.br/post/svelte-why-you-should-take-a-look/',
		date: '22 Jul 2019',
		tags: [
			'text'
		]
	},
	{
		title: 'Exploring Sapper + Svelte: A quick tutorial',
		link: 'https://blog.logrocket.com/exploring-sapper-svelte-a-quick-tutorial/',
		date: '2 Jul 2019',
		tags: [
			'text',
			'sapper',
			'react'
		]
	},
	{
		title: "Svelte is the most beautiful web framework I've ever seen",
		link: 'https://dev.to/jesseskinner/svelte-is-the-most-beautiful-web-framework-i-ve-ever-seen-325f',
		date: '29 Jun 2019',
		tags: [
			'text'
		]
	},
	{
		title: 'Why SvelteJS may be the best framework for new web devs',
		link: 'https://dev.to/bholmesdev/why-sveltejs-may-be-the-best-framework-for-new-web-devs-205i',
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
		link: 'https://blog.knoldus.com/getting-started-with-svelte/',
		date: '27 Jun 2019',
		tags: [
			'text',
			'vue',
			'react'
		]
	},
	{
		title: 'Why Svelte is the best JS "framework"',
		link: 'https://www.youtube.com/watch?v=rMBusx68ujY',
		date: '26 Jun 2019',
		tags: [
			'video'
		]
	},
	{
		title: 'The importance of elegance',
		link: 'https://www.varvet.com/blog/the-importance-of-elegance/',
		date: '25 Jun 2019',
		tags: [
			'text'
		]
	},
	{
		title: "Svelte 3's radical new approach to web frameworks",
		link: 'https://devmode.fm/episodes/svelte-3s-radical-new-approach-to-web-frameworks',
		date: '24 Jun 2019',
		tags: [
			'audio'
		]
	},
	{
		title: "Reactive user interfaces using SvelteJS",
		link: 'https://denisjakus.com/reactive-user-interfaces-using-sveltejs/',
		date: '19 Jun 2019',
		tags: [
			'text'
		]
	},
	{
		title: 'Svelte.js: Two way binding',
		link: 'https://medium.com/@Roli_Dori/svelte-js-two-way-binding-ded98a89af1c',
		date: '25 May 2019',
		tags: [
			'text',
			'vue',
			'react'
		]
	},
	{
		title: 'Truly reactive programming with Svelte 3.0',
		link: 'https://blog.logrocket.com/truly-reactive-programming-with-svelte-3-0-321b49b75969/',
		date: '21 May 2019',
		tags: [
			'text',
			'react',
			'angular'
		]
	},
	{
		title: 'Svelte vs React vs Angular vs Vue',
		link: 'https://www.youtube.com/watch?v=DZyWNS4fVE0',
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
		link: 'https://www.infoq.com/news/2019/05/svelte-3-interview-rich-harris/',
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
		link: 'https://www.youtube.com/watch?v=efAMY1JvrcQ',
		date: '30 Apr 2019',
		tags: [
			'video'
		]
	},
	{
		title: 'Svelte 3 Reaction & QuickStart Tutorial',
		link: 'https://www.youtube.com/watch?v=043h4ugAj4c',
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
		link: 'https://www.youtube.com/watch?v=AdNJ3fydeao',
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
fetch(scraperUrl, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		urls: resources.map(resource => resource.link)
	})
}).then(res => res.json()).then(r => {
	console.log(JSON.stringify(r, null, 4))
})
</script>
