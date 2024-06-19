

import React, { useState } from "react";
import './App.css';

function App () {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

   

    return (
        <div style  = {{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter App</h1>
            <h3>Count: {count}</h3>
            <button onClick = {increment}>Increment</button>
            <button onClick = {decrement}>Decrement</button>
            

        </div>
    );
  }
  export default App;