import React from 'react'

export default function Button3() {
    const handleClick=(e)=>e.target.textContent="OUCH!😣"
  return (
    <>
    <button onClick={(e)=>handleClick(e)}>Click me</button>
    <button onDoubleClick={(e)=>handleClick(e)}>Double Click me</button>
    </>
  )
}
