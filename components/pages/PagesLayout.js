import { useEffect } from "react"
import { getPages } from "./pagesApi"
import { pagesStore } from "./pagesStore"
import PageItem from "./views/PageItem"


export default function PagesLayout({pagesId}){
    const store = pagesStore()

    useEffect(()=>{
        getPages(store)
    },[])


    return (
        <div>
            {
                store?.lists?.map(page=><PageItem data={page} key={page?.id}/>)
            }
        </div>
    )
}

