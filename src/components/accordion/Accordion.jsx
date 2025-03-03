import React from "react";
import { useState } from "react";
import "./accordion.css"




const Accordion = () => {

    const [show, setShow]=useState(null);
    const [enableMulti, setEnableMulti]=useState(false);
    const [multiple, setMultiple]=useState([]);
    const data=[
        {
            id:1, head: "hello world 1", body: "hello world from react js hello world from react js hello world from react js hello world from react js "
        },
        {
            id:2, head: "hello world 2", body: "hello world from react js hello world from react js hello world from react js hello world from react js "
        },
        {
            id:3, head: "hello world 3", body: "hello world from react js hello world from react js hello world from react js hello world from react js "
        },
        {
            id:4, head: "hello world 4", body: "hello world from react js hello world from react js hello world from react js hello world from react js "
        },
    ]

    function handleHead(elemId){

        setShow(elemId===show? null: elemId)
    }
    function handleMulti(id){
        let copy=[...multiple];
        const index= copy.indexOf(id);
        if(index===-1) copy.push(id);
        else copy.splice(index,1);

        setMultiple(copy);
        console.log(copy)

    }
    function enableMultiSelection(){
        setEnableMulti(!enableMulti)
    }
       
    return ( 
    <>
        <h2>Accordion</h2>
        <br />
        <br />
        <button onClick={enableMultiSelection}>Enable MultiSelction</button>
        {data.map((dat)=>{
            return(
                <div onClick={()=>enableMulti? handleMulti(dat.id): handleHead(dat.id)} key={dat.id} className="container">
                    <h1>{dat.head}</h1>

                    {enableMulti? multiple.indexOf(dat.id)!==-1?<p>{dat.body}</p>:null :show===dat.id &&<p>{dat.body}</p>}
                  
                </div>
            )}
            
        )}
    </> 
    );
}
 
export default Accordion;