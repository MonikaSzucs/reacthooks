import { useState }  from 'react';

const UseStatePrev = () => {
    const [count, setCount] = useState(0);

    return (
        <section>
            <h1>useState Previous</h1>
            <h2>{count}</h2>
            <div class="row">
                <button onClick={() => setCount(prevState => prevState + 1)}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>
            <div class="row">
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </section>
    )
}

export default UseStatePrev;