import { useState }  from 'react';

const UseStateAddSubtractPrevObject = () => {
    const [count, setCount] = useState(0);
    const [values, setValues] = useState({ first: "", last: ""});

    const add = () => {
        // This updates in batches and since we are using a previous function it can update multiple times
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
    }

    const subtract = () => {
        setCount(prev => prev - 1);
        setCount(prev => prev - 1);
    }

    const updateArray = (newVal) => {
        // overwrite property we want to update
        setValues({...values, last: "Gary"});
        setValues(prev => ({...prev, last: "Gary"}));
    }

    return (
        <section>
            <h1>Add / Subtract using Previous Object</h1>
            <h2>{count}</h2>
            <div class="row">
                <button onClick={add}>+</button>
                <button onClick={subtract}>-</button>
            </div>
            <div class="row">
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
            <div>
                
            </div>
        </section>
    )
}

export default UseStateAddSubtractPrevObject;