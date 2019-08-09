const functions = require('firebase-functions')
const cors = require('cors')({origin: ['http://localhost:3000', 'https://why-svelte-js.web.app', 'https://why-svelte-js.firebaseapp.com']})
const cheerio = require('cheerio')
const fetch = require('node-fetch')

const scrapeMetatags = async url => {
	const res = await fetch(url).catch(err => {err})
	const html = await res.text()
	const $ = cheerio.load(html)
	const getMetatag = name =>
		$(`meta[name=${name}]`).attr('content') ||
		$(`meta[name="og:${name}"]`).attr('content') ||
		$(`meta[property="og:${name}"]`).attr('content') ||
		$(`meta[name="twitter:${name}"]`).attr('content') ||
		$(`meta[name="twitter:${name}:src"]`).attr('content')
	return {
		url,
		title: $('title').first().text(),
		favicon: $('link[rel="shortcut icon"]').attr('href'),
		description: getMetatag('description'),
		image: getMetatag('image'),
		author: getMetatag('author'),
		scrapeTime: new Date().toISOString()
	}
}

exports.scraper = functions.https.onRequest((req, res) => {
	cors(req, res, async () => {
		const data = await scrapeMetatags(req.query.url)
		res.send(data)
	})
})
