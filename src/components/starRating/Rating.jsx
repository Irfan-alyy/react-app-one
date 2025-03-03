import React, { useState } from "react";
import {FaStar} from "react-icons/fa"
import "./style.css"

const Rating = () => {
    const [rating,setRating]=useState(null)
    const [hover,setHover]=useState(null)


    function handleClick(index){
        setRating(index)
        
    }
    function hnadleMouseEnter(index){
        setHover(index)
        
    }
    function handleMouseLeave(index){
        setHover(rating)
        
    }
    return (
    <>
        <h1>Rate it</h1>
        <div style={{display:'flex'}}>
        {
            [...Array(10)].map((_,index)=>{
                index+=1
                return <FaStar
                className={index<=(hover || rating)? 'active': 'inactive'}
                key={index}
                onClick={()=>handleClick(index)}
                onMouseEnter={()=>hnadleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave(index)} />

            })
        }

        </div>
       
    </>
  );
}
 
export default Rating;