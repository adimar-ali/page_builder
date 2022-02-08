import Link from "next/link";


export default function ProjectItem({data}){
console.log(data);
    return (
        <div className="bg-white p-3 m-3 rounded-md max-w-[250px]">
           <h1>
           name {data?.name}
           </h1>
            <p>pages:{data?.pages?.length}</p>
            <div>
                <button className="bg-purple-600 px-2 m-2 rounded-sm text-white">
                    <Link href={`/project/${data?.id}`}>edit</Link>
                </button>
            </div>
        </div>
    )
}