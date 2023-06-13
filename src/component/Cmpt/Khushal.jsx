import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../Store/Actions/action';


function Khushal() {
  const count = useSelector((state) => state.analytics.Counter);
  const dispatch = useDispatch();


  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h2>Khushal</h2>
      <div className='heading-Boder'>

      </div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button></>
  )
}

export default Khushal