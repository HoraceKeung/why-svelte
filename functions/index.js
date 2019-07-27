const functions = require('firebase-functions')
const cors = require('cors')({origin: true})
const cheerio = require('cheerio')
const fetch = require('node-fetch')

const scrapeMetatags = urls => {
	const requests = urls.map(async url => {
		const res = await fetch(url)
		const html = await res.text()
		const $ = cheerio.load(html)
		const getMetatag = name =>
			$(`meta[name=${name}]`).attr('content') ||
            $(`meta[name="og:${name}"]`).attr('content') ||
            $(`meta[name="twitter:${name}"]`).attr('content')
		return {
			url,
			title: $('title').first().text(),
			favicon: $('link[rel="shortcut icon"]').attr('href'),
			description: getMetatag('description'),
			image: getMetatag('image'),
			author: getMetatag('author')
		}
	})
	return Promise.all(requests)
}

exports.scraper = functions.https.onRequest((req, res) => {
	cors(req, res, async () => {
		const body = req.body
		const data = await scrapeMetatags(body.urls)
		res.send(data)
	})
})
