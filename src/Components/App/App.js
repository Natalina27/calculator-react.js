import React, {useState} from 'react';
import './App.css';
import Counter from "../Counter/Counter";
import CounterForm from "../CounterForm/CounterForm";

function App() {

  const InitialCounterState = [
    { id: 123, name: 'Counter 1', count: 2 },
    { id: 234, name: 'Counter 2', count: 5 },
    { id: 345, name: 'Counter 3', count: 8 },
  ];

  const [counters, setCounters] = useState(InitialCounterState);

  const resetTotalCount = () =>{
    console.log('resetTotalCount');
    const newCounters = counters.map(el => ({ ...el, count: 0}));
    setCounters(newCounters);
  };

  const decrementCounter = (id) => {
    console.log('DEC ' + id);
    const index = counters.findIndex(el => el.id === id);
    const newCounters = [...counters];
    newCounters[index].count = newCounters[index].count - 1;
    setCounters(newCounters);
  };

  const incrementCounter = (id) => {
    console.log('INC ' + id);
    const newCounters = counters.map(el =>{
      if(el.id === id) return { ...el, count: el.count + 1};
      return el;
        });
    setCounters(newCounters);
  };
  
  const removeCounter = (id) => {
    const newCounters = counters.filter(el => el.id !== id);
    setCounters(newCounters);
  };

  const addCounter =(name, count) => {
    const newCounters = [...counters, {
      id: Math.random(),
      name,
      count
    }];
    setCounters(newCounters);
  };

  return (
    <div className="App">
      <h1>Counters</h1>
      Total {counters.reduce((a,b) => a + b.count, 0)}
      <button onClick={resetTotalCount}>Reset total count</button>
      <hr />
      {counters.map(el => <Counter key={el.id}
                                            id={el.id}
                                            name={el.name}
                                            count={el.count}
                                            increment={incrementCounter}
                                            decrement={decrementCounter}
                                            remove={removeCounter}

      />)
      }
      <hr/>

      <CounterForm onSubmit={addCounter}/>

    </div>

  );
}

export default App;
