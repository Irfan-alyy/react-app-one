import React, { useState } from "react";
import { increment, incrementBy,decrement,decrementBy, resetCount } from "../../features/todoSlice";
import { useSelector,useDispatch } from "react-redux";

const Counter = () => {
    const [dcrBy,setDcrBy]=useState(0)
    const [icrBy,setIcrBy]=useState(0)

    const count= useSelector(state=>state.count);
    const dispatch=useDispatch();

    
   
    return (  
    <>
    <h1>countes are {count}</h1>
    <button onClick={()=>dispatch(increment())} className="border px-5 py-2 bg-black text-white rounded-xl">increment</button>
    <br />
    <button onClick={()=>dispatch(decrement())} className="border px-5 py-2 bg-black text-white rounded-xl"  >decrement</button>
        <br />
    <button onClick={()=>dispatch(incrementBy(icrBy))} className="border px-5 py-2 bg-black text-white rounded-xl">increment by</button>;
    <input type="number" value={icrBy} onChange={(e)=>{setIcrBy(parseInt(e.target.value));}}/>
    <br />
    <button onClick={()=>dispatch(decrementBy(dcrBy))} className="border px-5 py-2 bg-black text-white rounded-xl">decrement by</button>
    <input type="number"  value={dcrBy} onChange={(e)=>setDcrBy((e.target.value))}/>
    <br />
    <button onClick={()=>dispatch(resetCount())}>reset Counter</button>

    </>
    );
}
 
export default Counter;