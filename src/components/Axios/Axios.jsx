import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Axios = () => {
    const [data,setData]=useState();
     async function getMovies(){
        const api="https://www.omdbapi.com/?i=tt3896198&apikey=e87551d8"
        const response= await axios.get(api)
        //console.log(response)
        setData(response.data)

    }
    useEffect(()=>{
        getMovies()
        
    },[])
    console.log(data)
    
    return (<>
    <div className='flex flex-col items-center gap-5'>
    <img src={data.Poster} alt="" />
      <h1>Title:{data.Title}</h1>
      <h1>Genre:{data.Genre}</h1>
      <h1>Runtime:{data.Runtime}</h1>
      <h1>Country:{data.Country}</h1>

    </div>
    

    
    </>  );
}
 
export default Axios;