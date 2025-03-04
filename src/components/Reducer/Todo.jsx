import { useReducer,useState } from "react";

const ReducerTodo = () => {
    const [value,setValue]=useState("")
    const [uvalue,setUvalue]=useState("")
    const [update,setUpdate]=useState({})
    function reducer(state,action){
        
        switch(action.type){
            case "add":
               
                
                return [...state,{id: new Date(), text: action.text}]
                
            case "remove":
                 const copy=state.filter(elem=>elem.id!=action.id)
                 return copy
                
            case "update":             
                state.forEach(element => {
                    element.id===action.id? element.text=action.text:null                    
                });
                
                return state
            case "clear":
                return []

            default:
                return state;
        }
       
    }

    const [tasks, dispatch]=useReducer(reducer,[])
    function handleClcik(){

        console.log("this is task bgr push,", tasks);
        
        value && dispatch({type:"add", text: value, id: new Date()})
        setValue("")
    }
    function handleDelete(id){
        dispatch({type:"remove", id: id})
    }
    function handleEdit(text,id){
        setUpdate({id:id, text: null})
        document.querySelector('.update-div').classList.remove("hidden")
        setUvalue(text)
        
    }
    function updateFunc(){
        const copy= update;
        copy.text=uvalue;
        copy.type="update";
        dispatch(copy)
        setUvalue("");
        document.querySelector(".update-div").classList.add("hidden")

    }
    
    return (  <div className="bg-green-300">
    <br />
    <br /> 

    <input type="text" className="border rounded-xl mr-5" placeholder=" Add a Task" value={value} onChange={(e)=>setValue(e.target.value)}/>
    <button onClick={handleClcik} className="rounded">Add Task</button>
    <hr />

    <div  >
        <h1 className="text-3xl">Todo List</h1>
        <ol className="bg-gray-400 w-100 m-auto flex flex-col rounded-xl">
            {console.log("tasks bfr map",tasks)}
            {tasks.map((todo,index)=><li className="text-xl px-5 flex justify-between items-center" key={todo.id}>
                <p>{todo.text}</p>
                <div>
                    <button className="text-2xl ml-10" onClick={()=>handleDelete(todo.id)}>X</button>
                    <button className="text-2xl ml-10" onClick={()=>handleEdit(todo.text,todo.id)}>Edit</button>

                </div>

            </li>)}
        </ol>
    </div>
    {
        tasks.length?<button onClick={()=>dispatch({type:"clear"})} className="mt-5 rounded">Clear All Task</button>: <p>No Task added Yet</p>

    }

    <div className="update-div hidden">
        <input type="text"  className="border rounded-xl mr-10" value={uvalue}  onChange={(e)=>setUvalue(e.target.value)}/>
        <button onClick={updateFunc} className="">Update Task</button>
    </div>
    


    </div>);
}
 
export default ReducerTodo;