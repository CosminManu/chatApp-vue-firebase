import {initializeApp} from "firebase/app"
import { getDatabase, ref, push } from "firebase/database"

const config = {
    apiKey: "AIzaSyC-bSPatxgAyv2PKbwwio80yR_48cYpDt0",
    authDomain: "vuechat-tylerpotts.firebaseapp.com",
    databaseURL: "https://vuechat-tylerpotts-default-rtdb.firebaseio.com",
    projectId: "vuechat-tylerpotts",
    storageBucket: "vuechat-tylerpotts.appspot.com",
    messagingSenderId: "676737726511",
    appId: "1:676737726511:web:68b90e68272c15f9e5eeda"
}


const app = initializeApp(config)
const db = getDatabase(app)

export { db, ref, push }