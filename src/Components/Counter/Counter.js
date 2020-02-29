import React from 'react';
// import '../Counter/Counter.css';

function Counter(props) {


    return(
        <div className='card mb-3'>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-sm-3'>
                            ID <strong>{props.id}</strong>
                    </div>

                    <div className='col-sm-3'>
                            Counter name <strong>{props.name}</strong>
                    </div>

                    <div className='col-sm-3'>
                        <button className='btn btn-primary' onClick={() => props.decrementCounter(props.id)} >-</button>
                        <strong>{props.value}</strong>
                        <button className='btn btn-primary' onClick={() => props.incrementCounter(props.id)} >+</button>
                    </div>
                    <div className='col-sm-3'>
                        <button className='btn btn-warning' onClick={() => addCounter(props.id)} >RESET {props.name }</button>
                        <button className='btn btn-danger' onClick={() => handleShowModal(props)} >DELETE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;