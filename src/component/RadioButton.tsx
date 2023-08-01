import React from 'react'
import { useState } from 'react'
import { Radio } from '../models/Radio'

type Props = {
  options: Radio[]
}

function RadioButton(props:Props){
  const {options} = props
  const [isChecked,setIsChecked] = useState('');

  const handleCheckd = (value:string)=>{
    setIsChecked((prev) =>{
      return prev === value ? '':value
    })
  }

  return (
    <div data-testid = 'radioButton'>
      {options.map((option,index)=>{
        return(
          <label key={`${index}-radio`}>
            <input type='radio' value={option.value} onChange={(e)=>{handleCheckd((e.target as HTMLButtonElement).value)}} checked={isChecked === option.value}  />
            {option.label}
          </label>
        )
      })}
    </div>
  )}

export default RadioButton;
