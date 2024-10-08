import { useState } from 'react'
import './App.css'
import Counter from './components/counter'


// //state
// interface CounterState{
//   value:number
// }

// interface UserState{
//   isSignnedIn:boolean;
// }

// //Actions

// const incrementByAmount={type:"increment",payload:10}
// const decrement={type:"decrement"}


// //reducers







function App() {

  return (
    <>
    <h1>
      <Counter/>
    </h1>
    </>
  )
}

export default App
