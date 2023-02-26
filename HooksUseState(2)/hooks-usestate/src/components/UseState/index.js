import './UseState.css'
import { useState } from 'react'


const UseState = () => {
  const [theme, setTheme] = useState('light')
  const [count, setCount] = useState(0)

  const increment = (prevCount) => prevCount + 1
  const decrement = (prevCount) => prevCount - 1


  return (
    <div className={theme}>
      <h1>UseState Component</h1>
      <button style={{ "backgroundColor": "black", "color": "white" }} onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
      <h1> {count} </h1>
      <button style={{ "backgroundColor": "blue", "color": "white", "border": "solid", "borderColor": "black",}} onClick={() => setCount(increment)}>Increment</button>
      <button style={{ "backgroundColor": "red" }} onClick={() => setCount(decrement)}>Decrement</button>
    </div>
  );
};

export default UseState;
