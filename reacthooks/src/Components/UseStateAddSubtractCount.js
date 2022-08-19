import { useState }  from 'react';

const UseStateAddSubtractCount = () => {
    const [count, setCount] = useState(0);

    const add = () => {
        // This updates in batches so it will still only go up by 1
        setCount(count + 1);
        setCount(count + 1);
    }

    const subtract = () => {
        setCount(count - 1);
    }

    return (
        <section>
            <h1>Add / Subtract using Count</h1>
            <h2>{count}</h2>
            <div class="row">
                <button onClick={add}>+</button>
                <button onClick={subtract}>-</button>
            </div>
            <div class="row">
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </section>
    )
}

export default UseStateAddSubtractCount;