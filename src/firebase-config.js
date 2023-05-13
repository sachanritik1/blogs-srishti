import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB2N6yqEtURGwi7mCC2otC7UfrNTxpX9dY",
	authDomain: "blogapp-22c9d.firebaseapp.com",
	projectId: "blogapp-22c9d",
	storageBucket: "blogapp-22c9d.appspot.com",
	messagingSenderId: "720366436567",
	appId: "1:720366436567:web:6674442f5a5bb36cf63092",
}
// const firebaseConfig = {
// 	apiKey: "AIzaSyAblPQbYDsXCPUBXPAM_D26PU1xgXnO4Gk",
// 	authDomain: "blogs-shristi.firebaseapp.com",
// 	projectId: "blogs-shristi",
// 	storageBucket: "blogs-shristi.appspot.com",
// 	messagingSenderId: "478260543972",
// 	appId: "1:478260543972:web:a98da49cb87e9c596787f1",
// 	measurementId: "G-24ME39CT6K",
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
