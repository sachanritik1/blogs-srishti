import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDc7PJ9309GQRO0v2-mCUhBIWpOAnNyec8",
//   authDomain: "blogproject-92aa7.firebaseapp.com",
//   projectId: "blogproject-92aa7",
//   storageBucket: "blogproject-92aa7.appspot.com",
//   messagingSenderId: "135318509256",
//   appId: "1:135318509256:web:034fab8084a0ad39e3b7fd",
// };
const firebaseConfig = {
	apiKey: "AIzaSyAblPQbYDsXCPUBXPAM_D26PU1xgXnO4Gk",
	authDomain: "blogs-shristi.firebaseapp.com",
	projectId: "blogs-shristi",
	storageBucket: "blogs-shristi.appspot.com",
	messagingSenderId: "478260543972",
	appId: "1:478260543972:web:a98da49cb87e9c596787f1",
	measurementId: "G-24ME39CT6K",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
