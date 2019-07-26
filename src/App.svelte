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
			<div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4">
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
</script>
