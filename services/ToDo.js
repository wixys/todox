import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import axios from "axios"

const apiClient = axios.create({
  baseURL: 'https://todo-4ba47.firebaseio.com/todos.json',
  withCredencials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default {
	initFirebase() {
		var config = {
			apiKey: process.env.APIKEY,
			authDomain: process.env.AUTHDOMAIN,
			databaseURL: process.env.DATABASEURL,
			projectId: process.env.PROJECTID,
			storageBucket: process.env.STORAGEBUCKET,
			messagingSenderId: process.env.MESSAGINSENDERID,
			appId: process.env.APPID,
		}

		return firebase.initializeApp(config) 
	},
	getTodos() {
		return apiClient.get()
	},
	getItem() {
		return apiClient.get()
	}
}