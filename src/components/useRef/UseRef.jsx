
import React, { useState, useEffect, useRef } from 'react';
const UseRef = () => {
    const [count,setCount]=useState(0)

    const ref=useRef(0)
    // one use case of useref is to maintain its value even after rerender, and it didnt triger component re-render when changed unlike usestate hokk which cause re-render of component when value changed
    useEffect(()=>{
        ref.current=ref.current+1
        console.log(`rerender of component, and ref value: ${ref.current}`)
    })

    const btnref=useRef()
    // another use case is to get dom element and use it by set it ref
    return (<>
    <h1>Cout is {count}</h1>
    <button onClick={()=>setCount(count+1)}>Click me</button>

    <p ref={btnref}>Hello world where are you</p>
    <button onClick={()=>{ btnref.current.style.color="red"}}>Chnage Color</button>
    
    </>  );
}
 
export default UseRef;
