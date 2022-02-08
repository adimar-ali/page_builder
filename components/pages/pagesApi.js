import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { snapToArray } from "../api";

const pagesRef = collection(db,'pages')

export async function getPages(store){
    const snap = await getDocs(pagesRef)
    const pages = snapToArray(snap)
    store?.set({lists:pages})
}