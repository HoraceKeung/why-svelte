import App from './App.svelte'
import firebase from 'firebase/app'
import 'firebase/database'
if (!firebase.apps.length) {
	firebase.initializeApp({
		apiKey: 'AIzaSyC_uezrhAymyajDQVUXqdoul_6KqjZChLk',
		databaseURL: 'https://why-svelte-js.firebaseio.com',
		projectId: 'why-svelte-js'
	})
}
const fireDb = firebase.database()

const app = new App({
	target: document.body,
	props: {
		fireDb
	}
})

export default app
