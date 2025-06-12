import React, { useMemo, useState } from 'react'
import './App.css';

const App = () => {

    const [height,setHeight] = useState(180);
    const [weight,setWeight] = useState(70);
    
    const handleweight = (e) => {
        //console.log(e);
        setWeight(weight => e.target.value);
    }

    const handleheight = (e) => {
        //console.log(e);
        setHeight(height => e.target.value);
    }

    const output = useMemo(()=>{
        return (weight*10000/(height*height)).toFixed(1);
    },[weight,height])
    

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight: {weight} kg</p>
        <input 
        className='input-slider' 
        type='range' 
        step='1' 
        min="40" 
        max="200"
        onChange={handleweight}
        />

        <p className='slider-output'>Height: {height} cm</p>
        <input 
        className='input-slider' 
        type='range' 
        step='1' 
        min="80" 
        max="200"
        onChange={handleheight}
        />
        
      </div>
      <div className='output-section'>
        <p><b>Your BMI is </b></p>
        <p className='output-bmi'>{output}</p>
      </div>
    </main>
  )
}

export default App
