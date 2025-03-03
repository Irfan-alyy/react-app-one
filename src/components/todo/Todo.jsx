import React, { createElement, useEffect } from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addTodo, removeTod , editTodo} from "../../features/todoSlice";


const Todo = () => {
    const dispatch=useDispatch()
const [todo, setTodo]= useState("")


    const todos=useSelector(state=>state.todos)
    useEffect(()=>{
        console.log(todos);

    },[todo])

    const handleClick=()=>{
        dispatch(addTodo(todo))
        

    }
    const handleDelete=(id)=>{
        
        dispatch(removeTod(id))
        
    }
    
    return (<>
    <div className="form flex flex-col w-100 bg-green-300 m-auto h-50 justify-between py-10" id="form">
        <label className="text-3xl">Add a Task to Todo List</label>
        <input type="text" name="todo" id="todo" value={todo} onChange={(e)=>setTodo(e.target.value)} className="border rounded mx-10 "/>
        <button onClick={handleClick} id="addBtn" className="bg-black w-fit m-auto text-white">ADD TASK</button>
    </div>
    <div>
        <h1 className="">Todo List</h1>
        <ol className="bg-gray-400 w-100 m-auto">
            {todos.map((todo,index)=><li className="text-xl px-5" key={todo.id}>{todo.text}<button className="text-2xl ml-10" onClick={()=>handleDelete(todo.id)}>X</button>
            </li>)}
        </ol>
    </div>
    </>  );
}
 
export default Todo;