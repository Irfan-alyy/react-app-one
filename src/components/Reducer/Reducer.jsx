import { useReducer } from "react";

const Reducer = () => {
    const initialState=0;
    const [state,dispatch]=useReducer(reducer, initialState)

    function reducer(state,action){
        switch(action){
            case "increment":
                return state+1;
                break;
            case "decrement":
                return state-1;
                break;
            case "reset":
                    return state=0;
                    break;
            default:
                return
        }

    }


    return ( <>
    <h2>
        Reducer hook in action
    </h2>

    <h2>Count: {state}</h2>
    <button onClick={()=>dispatch("increment")}>Incremenet</button>
    <button onClick={()=>dispatch("decrement")}>Decremenet</button>
    <button onClick={()=>dispatch("reset")}>Reset</button>

    
    </> );
}
 
export default Reducer;