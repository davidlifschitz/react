import React, {useState, Fragment, useEffect, useLayoutEffect} from 'react'

function Counter()
{
    var [count, setCount] = useState(0)
    var [input, setInput] = useState('')
    var [previous, setPrevious] = useState()
    
    return (
        <Fragment>
            <h1>Click on the add button to add to the counter
            Click on the subtract button to subtract from the counter
            Click on the reset button to return back to 0.
        </h1>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)}>Subtract</button>
        <button onClick={() => setCount(count - 1)}>Subtract</button>
        <p>The current count is {count}</p>
        <h1>please input your name here</h1>
        <input type="text" value={input} onChange={(event) => setInput(event.target.value)}></input>
        <h1>{input}</h1>
        <button onClick={() => setInput("")}>AC</button>
        <button onClick={() => setInput(input+"1")}>1</button>
        <button onClick={() => setInput(input+"2")}>2</button>
        <button onClick={() => setInput(input+"3")}>3</button>
        <button onClick={() => setInput(input+"4")}>4</button>
        <button onClick={() => setInput(input+"5")}>5</button>
        <button onClick={() => setInput(input+"6")}>6</button>
        <button onClick={() => setInput(input+"7")}>7</button>
        <button onClick={() => setInput(input+"8")}>8</button>
        <button onClick={() => setInput(input+"9")}>9</button>
        

        </Fragment>
        
    )
}

export default Counter 