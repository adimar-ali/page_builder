import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import PagesLayout from "../../components/pages/PagesLayout"
import { getProject } from "../../components/projects/projectsApi"
import { projectStore } from "../../components/projects/projectsStore"

export default function project (){
    const router = useRouter()
    const {id} = router.query
    const store = projectStore()

    useEffect(()=>{
       id && getProject(id,store)
    },[id])

    return (
        <div>
            project {id}
            <h1>{}</h1>
            <PagesLayout pagesId={store?.data?.pages}/>
        </div>
    )
}


