import Link from "next/link";


export default function PageItem({data}){
    console.log(data);

    return (
        <div className=" bg-white p-2 m-2 max-w-[250px]" >
            <h1>{data?.name}</h1>
            <button>
                <Link href={`/editor/${data?.id}`}>edit</Link>
            </button>
        </div>
    )
}