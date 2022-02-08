

export function snapToArray(snap){
    return snap.docs.map(d=>({id:d.id,...d.data()}))
}

export function docToObject(doc){
    return {id:doc.id,...doc.data()}
}