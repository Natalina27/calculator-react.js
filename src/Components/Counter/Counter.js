import React from 'react';
import '../Counter/Counter.css';

function Counter(props) {
    return(
        <div className='card mb-2'>
            <div className='card-body'>
                <div className='row'>
                    <div className='col'>
                            ID <strong>{props.id}</strong>
                            Counter name <strong>{props.name}</strong>
                            Counter value <strong>{props.count}</strong>

                            <button onClick={() => props.decrement(props.id)} className='btn btn-primary'>-</button>
                            <button onClick={() => props.increment(props.id)} className='btn btn-primary'>+</button>
                            <button onClick={() => props.remove(props.id)} className='btn btn-danger'>DELETE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;