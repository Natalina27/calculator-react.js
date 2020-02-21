import React, {useState} from 'react';
import './App.css';
import Counter from "../Counter/Counter";

function App() {

  const InitialCounterState = [
    { id: 123, name: 'Counter 1', count: 2 },
    { id: 234, name: 'Counter 2', count: 5 },
    { id: 345, name: 'Counter 3', count: 8 },
  ];

  const [counters, setCounters] = useState(InitialCounterState);

  const resetTotalCount = () =>{
    console.log('resetTotalCount');
    const newCounts = counters.map(el => ({ ...el, count: 0}));
    setCounters(newCounts);
  };

  const increment = () => {
    console.log('INC');

  };
  const decrement = () => {
    console.log('DEC');

  };

  return (
    <div className="App">
      <h1>Counters</h1>
      Total {counters.reduce((a,b) => a + b.count, 0)}
      <button onClick={resetTotalCount}>Reset total count</button>
      <hr />
      {counters.map(el => <Counter key={el.id}
                                   name={el.name}
                                   count={el.count}
                                   increment={increment}
                                   decremenr={decrement}
      />)
      }
    </div>
  );
}

export default App;
