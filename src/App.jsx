import { useState } from 'react'
import './App.css'
import Todo from './components/todo/Todo'
import { store } from './features/store'
import { Provider } from 'react-redux'
import Counter from './components/couter/Counter'
import Accordion from './components/accordion/Accordion'
import RandomColor from './components/randomColor/RandomColor'
import Rating from './components/starRating/Rating'
import Slider from './components/image-slider/Slider'

function App() {
  const imagesUrl="https://picsum.photos/v2/list?page=1&limit=10"

  return(
    <>
    <Provider store={store}>

   
    {/* <Todo/> */}
      <br />
      <br />
      <br />
      {/* <Counter/> */}
      {/* <Accordion/> */}
      {/* <RandomColor/> */}
      {/* < Rating/> */}

      <Slider  url={imagesUrl}/>
    </Provider>
    </>
  )
}

export default App
