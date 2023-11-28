import React, { useState } from 'react'

export const Counter = ({count,inc}) => {
  return (
      <>
          Count :{count}
          <button onClick={inc}>+</button>
      </>
  )
}
// it is this simple how we can create our own custom hooks 
export const useCounter = () => {
    const [count, setCount] = useState(0)
    const inc = () => setCount(count => count + 1);
    return {count ,inc}
}