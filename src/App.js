import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: 'INC' });
  }
  const decrement = () => {
    dispatch({ type: 'DEC' });
  }
  const counter = useSelector((state) => state.counter);
  return (
    <div >
      <h1>Counter App</h1>
      <h3>{counter}</h3>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

export default App;
