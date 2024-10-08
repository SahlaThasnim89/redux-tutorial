import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../state/store'
import { decrement, increment, incrementbyAmount, incrementAsync} from '../state/counter/counterSlice'


const counter = () => {
    const count=useSelector((state:RootState)=>state.counter.value)
    const dispatch=useDispatch()
  return (
    <div>
        <h2>{count}</h2>
        <div>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
            <button onClick={()=>dispatch(incrementAsync(10))}>+</button>
        </div>
    </div>
  )
}

export default counter