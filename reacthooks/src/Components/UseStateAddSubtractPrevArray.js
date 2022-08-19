import { useState }  from 'react';

const UseStateAddSubtractPrevArray = () => {
    const [count, setCount] = useState(0);
    const [values, setValues] = useState([]);

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
        //setValues([...values, newVal]);
        // keep the previous values but also add new ones
        setValues(prev => [...prev, newVal])
    }

    return (
        <section>
            <h1>Add / Subtract using Previous Array</h1>
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

export default UseStateAddSubtractPrevArray;