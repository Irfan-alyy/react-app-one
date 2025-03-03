import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css"
const Slider = ({url}) => {
    const [images,setImages]=useState([]);
    const [currentslide, setCurrentSlide]=useState(0);

    const [isLoading,setIsLoading]=useState(true)

    async function getImages(imgUrl) {
        try{
            const response=await fetch(imgUrl)
            const data= await response.json()
            setImages(data)
            console.log(data)
            setIsLoading(false)


        }catch(e){
            console.log("error occur during fetching images", e.message)
            setIsLoading(false)
        }
        
    }

    useEffect(()=>{
        getImages(url)
      },[url])


      function handlePrev(){
        setCurrentSlide(currentslide===0? images.length-1: currentslide-1)
      }
      function handleNext(){
        setCurrentSlide(currentslide===images.length-1? 0: currentslide+1)

      }

    return ( <>

    <div className="container">
        <div style={isLoading?{display: "block"}: {display:"none"}}> Loading Data! please wait</div>
        <BsArrowLeftCircleFill className="left-arrow" onClick={handlePrev}/>
        
            <div className="image-container">
                {
            images.map((image,index)=>{
                return(

                    <img key={image.id} src={image.download_url} className={index==currentslide?"current-image": "hide-image"}></img>
                    
                )
            })}
            </div>

        
        <BsArrowRightCircleFill className="right-arrow" onClick={handleNext}/>
        <div className="indicator">
        {
            images.map((_,index)=><div className={index===currentslide? "current-indicator" : "inactive-indicator"} key={index} onClick={()=>setCurrentSlide(index)}>

                
            </div>
            )
        }


        </div>

    </div>
    

    </> );
}
 
export default Slider;