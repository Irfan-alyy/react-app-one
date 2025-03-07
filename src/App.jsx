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
import Products from './components/product-load/Product'
import Memo from './components/usememo/Memo'
import Reducer from './components/Reducer/Reducer'
import ReducerTodo from './components/Reducer/Todo'
import UseRef from './components/useRef/UseRef'
import Axios from './components/Axios/Axios'
import TreeView from './components/tree-view-menu/menu'

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

      {/* <Slider  url={imagesUrl}/> */}
      {/* <Products/> */}
      {/* <Memo/> */}
      {/* <Reducer />
      <ReducerTodo/> */}
      {/* <UseRef/> */}
      {/* <Axios/> */}
        <TreeView/>
    </Provider>
    </>
  )
}

export default App
