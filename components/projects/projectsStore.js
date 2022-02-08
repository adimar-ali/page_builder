
import create from 'zustand'

const projectsStore_ =set=>({
    set:setter=>set(setter)
})
export const projectsStore = create(projectsStore_)


const projectStore_ = set =>({
    set:setter=>set(setter)
})
export const projectStore = create(projectStore_)