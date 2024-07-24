import React, { useState } from 'react'


const Task1 = () => {
    const [message, setMessage] = useState('')
    const Clicked = () => {
        setMessage('Hi How are you ');
      };
  return (
    <>
        <button onClick={Clicked}>Click Me!</button>
        <p>{message}</p>
    </>
  )
}

export default Task1