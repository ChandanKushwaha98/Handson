import React, { useState } from 'react'

// this component is demostrating lazy Initialization using useState
//this can be reffered to take a look how we can persist the state using local storage
//USP here is , we are not unecessarily setting the value in local storage again and again

const LazyInitialization = () => {
  console.log('render');
  const initial = () => {
    console.log('Initial');
   return +(window.localStorage.getItem('count') ?? 0)
  }
  const [count, setCount] = useState(initial)
  //Here useState takes  lazy Initializer function called initial


  function inc() {
    setCount(count => {
      const next = count + 1;
      window.localStorage.setItem('count', next.toString())
      return next;
    })
  }

  return (
    <>
      <div>Count :{count}</div>
      <button onClick={inc}>+</button>
    </>
  )
}

export default LazyInitialization