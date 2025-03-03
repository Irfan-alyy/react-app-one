import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[{
        id:1,
        text: "Todo tasks added"
    }],
    count:0
}

export const TodoSlice=createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(todo);

        },
        removeTod:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },

        increment:(state)=>{
            state.count=state.count+1

        },
        decrement: (state)=>{
            state.count=state.count-1
        },
        incrementBy:(state,action)=>{
            state.count=state.count+action.payload},
        decrementBy:(state,action)=>{
            state.count=state.count-action.payload},
        resetCount:(state)=>{state.count=0}
    }
})

export const {addTodo, removeTod,editTodo,increment,decrement,incrementBy,decrementBy, resetCount}= TodoSlice.actions;

export default TodoSlice.reducer