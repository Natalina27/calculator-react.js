import React, {useState} from "react";

function AddCounterForm(props) {

    const [name, setName] = useState('Counter n  ');
    const [count, setCount] = useState('0');

    const onSubmit = () => {
        props.onSubmit(name, Number(count));
        setName('Counter n  ');
        setCount(0);
    };

    return(
        <div className='row'>
            <div className="col">
                <input type=" text" name='name' value={name}
                       onChange={e => setName(e.target.value)}
                       className='form-control' />
            </div>
            <div className="col">
                <input type="number" name='count' value={count}
                       onChange={e => setCount(e.target.value)}
                       className='form-control'/>
            </div>
            <div className="col">
                <button onClick={() => onSubmit(name, count)}
                        className='btn btn-secondary'>CREATE</button>
            </div>
        </div>
    );
}

export default AddCounterForm;