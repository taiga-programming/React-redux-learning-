import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const islogged = useSelector(state =>state.islogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(100))}>+</button>
      <button onClick={() => dispatch(decrement(-100))}>-</button>
     
      {islogged ? <h3>Valuable information i should't see</h3>:""}
    </div>
  );
}

export default App;
