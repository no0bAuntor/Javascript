import React from 'react'
import { useState } from 'react'

export default function ColorPicker() {
    const [color, setColor]=useState("#fff");

    function handleColorChange(event) {
        setColor(event.target.value);
    }
  return (
    <div className='color-picker-container'>
        <h1>Color Picker</h1>
        <div className="color-display" style={{backgroundColor: color}}>
        <p>Selected Color: {color}</p>
        </div>
        <label>Select a color:</label>
        <input type="color" value={color} onChange={handleColorChange}/>
    </div>
  )
}
