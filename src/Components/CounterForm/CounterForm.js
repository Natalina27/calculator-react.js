import React, {useState} from "react";

function CounterForm(props) {

    const [name, setName] = useState('---');
    const [count, setCount] = useState('456');

    const onSubmit = () => {
        props.onSubmit(name, count);
        setName('');
        setCount(0);
    };

    return(
        <div className='row'>
            <div className="col">
                <input type=" text" name='name' value={name} onChange={e => setName(e.target.value)} className='form-control' />
            </div>
            <div className="col">
                <input type=" text" name='count' value={count} onChange={e => setCount(e.target.value)} className='form-control'/>
            </div>
            <div className="col">
                <button onClick={() => props.onSubmit(name, count)} className='btn btn-secondary'>CREATE</button>
            </div>
        </div>
    );
}

export default CounterForm;