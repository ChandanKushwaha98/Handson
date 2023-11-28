import React from 'react'
import { Counter, useCounter } from './Counter'

const CounterDemo = () => {
    const first = useCounter()
    const second = useCounter()
    return (
        <>
            <Counter {...first} />
            <br />
            <br />
            <Counter {...second} />
            <h2>Sum of both counters ={first.count + second.count}</h2>

        </>
    )
}

export default CounterDemo