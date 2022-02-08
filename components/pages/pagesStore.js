

import create from 'zustand'

const pagesStore_ = set=>({
    set:setter=>set(setter)
})
export const pagesStore = create(pagesStore_)


