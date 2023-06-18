import { useState } from 'react'
import styles from './NumberInput.module.scss';

type Props = {
  placeholder?:string
  labelText:string
  decimalPoint:number
}

export default function NumberInput(props:Props){
  const { placeholder,labelText, decimalPoint }= props
  const [noValue,setNoValue] = useState('')

  const fixedNumber=( value:string )=>{
    let numbers = String(value).split('.');
    const test = (numbers[1] ? numbers[1].length : 0)
    if (test <= decimalPoint){
      setNoValue(value)
    }
  }

  const fill = () => {
    let numbers = String(noValue).split('.');
    const test = (numbers[1] ? numbers[1].length : 0)
    if (test < decimalPoint){
      setNoValue(Number(noValue).toFixed(decimalPoint))
    }
  }

  return(
    <div className={styles.numberInputContainer}>
      <label>{labelText}</label>
      <input type='number' placeholder={placeholder} value={noValue} onChange={(e)=>{
        fixedNumber(e.target.value)
      }
      } onBlur={()=>{
        fill()
      }}/>
    </div>
  )
}
