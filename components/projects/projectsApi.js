import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import {db} from '../../firebaseConfig'
import { docToObject, snapToArray } from '../api';

const projectsRef = collection(db,'project')
const projectRef = id=>doc(db,'project',id)

export async function getProjects(store){
    const snap = await getDocs(projectsRef)
    const projects = snapToArray(snap)
    store.set({lists:projects})
}

export async function getProject(id,store){
    const doc_ = await getDoc(projectRef(id))
    const data = docToObject(doc_)
    store.set({data})
}