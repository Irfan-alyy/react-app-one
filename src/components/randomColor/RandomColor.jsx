import { useEffect, useState } from "react";

const RandomColor = () => {

    const [color, setColor]=useState('#000000');
    const [colorType,setColorType]=useState('hex');
   


    function generateRandom(length){
        return Math.floor(Math.random()*length)
    }
    function generateRandomHex(){
        const array=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let col="#"
        for (let index = 0; index < 6; index++) {
            col+=array[generateRandom(array.length)];
        }
        // console.log(col);
        setColor(col)
    }
    function generateRandomRgb(){
        const r=generateRandom(256);
        const g=generateRandom(256);
        const b=generateRandom(256)
        // console.log(`rgb(${r},${g},${b})`);
        setColor(`rgb(${r},${g},${b})`)
        

    }
    function generateRandomHsl(){
        const h=generateRandom(10);
        const s=generateRandom(101);
        const l=generateRandom(101);
        //console.log(`hsl(${h},${s},${l})`);
        setColor(`hsl(${h},${s}%,${l}%)`);
        

    }

    function generateRandomColor(){
        if(colorType==='hex') generateRandomHex();
        else if(colorType=="rgb") generateRandomRgb()
        else generateRandomHsl()
    }

    return ( 
        
    <div style={{
        height: '70vh',
        width: '70vw',
        background:color, 
    }}>
        <button onClick={()=>setColorType("hex")}>Hex Color</button>
        <button onClick={()=>setColorType("rgb")}>Rgb color</button>
        <button onClick={()=>setColorType("hsl")}>HSL color</button>

        <button onClick={generateRandomColor}>Generate Random color</button>



        
        <div style={{marginTop: "20vh"}}>
            <h2>Color: {color}</h2>
        </div>

    </div> );
}
 
export default RandomColor;