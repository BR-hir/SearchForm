import { useState } from 'react'
import { Radio } from '../models/Radio'

type Props = {
  options: Radio[]
}

export default function RadioButton(props:Props){
  const {options} = props

  const [isChecked,setIsChecked] = useState('');

  const handleCheckd = (event:string)=>{
    setIsChecked((prev) =>{
      return prev === event ? '':event
    }
    )
  }

  return (
    <div data-testid = 'radioButton'>
      {options.map((option,index)=>{
        return(
          <label key={`${index}-radio`}>
            <input type='radio' value={option.value} onChange={()=>{}} checked={isChecked === option.value} onClick={(e)=>{handleCheckd((e.target as HTMLButtonElement).value)}}/>
            {option.label}
          </label>
        )
      })}
    </div>
  )
}
