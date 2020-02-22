import React, {useState} from "react";

function CounterForm(props) {

    const [name, setName] = useState('---');
    const [count, setCount] = useState('456');

    return(
        <div>
            <input type=" text" name='name' value={name} onChange={e => setName(e.target.value)} />
            <input type=" text" name='count' value={count} onChange={e => setCount(e.target.value)} />
            <button onClick={() => props.onSubmit(name,count)}>CREATE</button>
        </div>
    );
}

export default CounterForm;