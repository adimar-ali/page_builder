import { useEffect } from "react"
import { getProjects } from "./projectsApi"
import { projectsStore } from "./projectsStore"
import ProjectItem from "./views/ProjectItem"

export default function ProjectsLayout(){
    const store = projectsStore()
    
    useEffect(()=>{
        getProjects(store)
    },[])

    return (
        <div>
            project layout
            {
                store?.lists?.map(project=><ProjectItem data={project} key={project?.id}/>)
            }
        </div>
    )
}