import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {decrement,increment,incrementByAmount,decrementByAmount} from '../features/counter/counterSlice';

function Counter(){
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

    const handleIncrementByAmount = () => {
        dispatch(incrementByAmount(5))
    }

    const handleDecrementByAmount = () => {
        dispatch(decrementByAmount(5))
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrementByAmount}>IncrementByAmount</button>
            <button onClick={handleDecrementByAmount}>DecrementByAmount</button>
        </div>
    )
}

export default Counter