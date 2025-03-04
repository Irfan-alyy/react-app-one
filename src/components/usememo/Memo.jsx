import { useMemo, useState } from "react";

const Memo = () => {
    const [count, setCount]=useState(0);
    const [memo,setMemo]=useState(0)
    let array
   useMemo(()=>{ array= new Array(3000000).fill(0).map((_,index)=>{
    return{
        index:index,
        ayrom: index===2900000
    }
});


},[memo])
    const [state,setState]=useState(array)


    // const ayrom= state.find(item=>item.ayrom===true);
    useMemo(()=>{const ayrom= state.find(item=>item.ayrom===true);
        console.log(ayrom)
    },[memo])


    function click(){
        if(count===10) setMemo(1)
        setCount(count+1);
    }
    return (<>

    <button onClick={click}>count: {count}</button>
    <br />
    <h2></h2>

    
    </>  );
}
 
export default Memo;