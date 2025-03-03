import { useState } from 'react'
import './App.css'
import Todo from './components/todo/Todo'
import { store } from './features/store'
import { Provider } from 'react-redux'
import Counter from './components/couter/Counter'
import Accordion from './components/accordion/Accordion'
import RandomColor from './components/randomColor/RandomColor'

function App() {

  return(
    <>
    <Provider store={store}>

   
    {/* <Todo/> */}
      <br />
      <br />
      <br />
      {/* <Counter/> */}
      {/* <Accordion/> */}
      <RandomColor/>

    </Provider>
    </>
  )
}

export default App
