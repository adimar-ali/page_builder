import create from 'zustand'
const pageStore_ = set=> ({
    childs:[],
    set:setter=>set(setter)
})

const pageStore = create(pageStore_)

export default function Canvas (){
    return (
        <div className="min-h-screen p-3">
            <div className="bg-white w-full min-h-[300px]">
                <Content/>
                <Adder/>
            </div>
        </div>
    )
}

const Content =()=> {
const childs = pageStore(s=>s.childs)

console.log(childs);
    return (
        <div >
            {

            }
        </div>
    )
}

function Adder(){
    return <div>
        <button className="bg-blue-500 rounded-full text-white min-w-[30px] min-h-[30px] m-3">+</button>
        <ElList/>
    </div>
}

function ElList(){



    return <div>
        <Item>button</Item>
        <Item>h1</Item>
        <Item>column</Item>
    </div>
}

const Item =({children})=> {


    const onSelectHandler= ({target})=>{
        console.log(target.name);

    }

   
return <button className="m-2 ring-1 ring-blue-300 p-1 rounded-sm" name={children} onClick={onSelectHandler}>{children}</button>
}

const elements = {
    button:()=><button>button</button>,
    button:()=><h1>h1</h1>,
    column:()=><div>column</div>,
}

// const ElemButton =()=><button