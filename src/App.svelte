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
				<a target="_blank" href={r.url}><div class="h-48 bg-contain bg-center bg-no-repeat" style={r.image && `background-image: url(${r.image})`}/></a>
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
					<p class="leading-tight mb-6">{r.description || ''}</p>
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
export let resources

let searchWord = ''
$: searchedResources = resources.filter(r => JSON.stringify(r).toLowerCase().includes(searchWord.toLowerCase()))
</script>

<style global>
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	font-size: 16px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	@apply text-second
}
*, *:before, *:after {
	box-sizing: border-box;
	margin: 0;
	-webkit-tap-highlight-color: transparent;
}
.grad {
	background-image: linear-gradient(theme('colors.prime'),theme('colors.flash'));
}
button:focus {
	@apply outline-none
}
#arrow {
	stroke: white;
	stroke-width: 2;
	stroke-linecap: round;
	stroke-linejoin: round;
	fill: none;
	transform: rotate(-90deg);
}
</style>
