<div class="bg-white h-16 w-full fixed left-0 top-0 shadow-md z-50">
	<div class="container h-full flex">
		<div class="my-auto mr-2 sm:mr-4"><img class="h-8 sm:h-12 min-w-8 cursor-pointer" src="icon.png" alt="logo" on:click={() => { searchWord = '' }}></div>
		<h1 class="my-auto text-xl sm:text-3xl whitespace-no-wrap font-bold hidden sm:block">Why Svelte</h1>
		<input class="rounded border my-auto ml-auto p-2 focus:outline-none focus:border-prime" bind:value={searchWord} placeholder="Search">
	</div>
</div>
<div class="container mt-16 pt-8">
	<div class="flex flex-wrap -mx-2">
		{#each searchedResources as r}
		<div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-6">
			<div class="shadow-md grad w-full h-full rounded flex flex-col overflow-hidden">
				<a target="_blank" href={r.url}><div class="h-48 bg-contain bg-center bg-no-repeat" style={`background-image: url(${r.image})`}/></a>
				<div class="p-4 flex flex-col flex-1 bg-white">
					<p class="text-sm mb-2">{r.date}</p>
					<a target="_blank" href={r.url} class="text-xl font-bold mb-2 leading-tight">{r.title}</a>
					<div class="flex flex-wrap -mx-1 mb-4">
						{#each r.tags as t}
						<div class="px-1">
							<button class="px-1 capitalize bg-flash text-white rounded text-sm" on:click={() => { searchWord = t }}>{t}</button>
						</div>
						{/each}
					</div>
					{#if r.loading}
					<div class="mx-auto mb-4"><div class="loader"></div></div>
					{:else}
					<p class="leading-tight mb-6">{r.description || ''}</p>
					{/if}
					<a target="_blank" href={r.url} class="mx-auto mt-auto">
						<button class="bg-prime text-white w-32 py-2 px-4 rounded">Read More</button>
					</a>
				</div>
			</div>
		</div>
		{/each}
	</div>
</div>
<div class="fixed right-0 bottom-0 p-4 md:p-8 z-50">
	<button class="h-10 w-10 rounded bg-prime opacity-50 hover:opacity-100" on:click={() => window.scrollTo(0, 0)}>
		<svg id="arrow" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
	</button>
</div>

<script>
import {set, get} from 'idb-keyval'

export let fireDb
let resources = []
let totalScrape = 0
const init = async () => {
	const resourcesInDb = await get('resources')
	if (resourcesInDb) resources = resourcesInDb
	resources = await fireDb.ref('resources').once('value').then(res => res.val().sort((a, b) => {
		return new Date(b.date) - new Date(a.date)
	}).map(r => {
		const resourceInDb = resourcesInDb ? resourcesInDb.find(x => x.url === r.url) : null
		return {...r, ...resourceInDb, date: new Intl.DateTimeFormat('en-GB', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		}).format(new Date(r.date))}
	}))
	resources.forEach((resource, index) => {
		if (!resource.scrapeTime || (new Date() - new Date(resource.scrapeTime)) / 1000 / 60 / 60 / 24 > 30) {
			totalScrape++
			resources[index].loading = true
			fetch(scraperUrl + `?url=${resource.url}`).then(res => res.json()).then(r => {
				resources[index] = {...resource, ...r, loading: false}
				totalScrape--
				if (!totalScrape) set('resources', resources)
			})
		}
	})
}
init()

let searchWord = ''
$: searchedResources = resources.filter(r => JSON.stringify(r).toLowerCase().includes(searchWord.toLowerCase()))
</script>

<style>
#arrow {
	stroke: white;
	stroke-width: 2;
	stroke-linecap: round;
	stroke-linejoin: round;
	fill: none;
	transform: rotate(-90deg);
}
</style>
