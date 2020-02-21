import React from "react";
import '../Counter/Counter.css';

function Counter(props) {
    return(
        <div>
            Counter name <strong>{props.name}</strong>
            Counter value <strong>{props.count}</strong>

            <button onClick={props.decrement}>-</button>
            <button onClick={props.increment}>+</button>




        </div>
    );
}

export default Counter;