import { useState } from 'react'
import styles from './NumberInput.module.scss';

type Props = {
  placeholder?:string
  labelText:string
  decimalPoint:number
}

function NumberInput(props:Props){
  const { placeholder,labelText, decimalPoint }= props
  const [noValue,setNoValue] = useState('')

  const fixedNumber=( value:string )=>{
    let numbers = String(value).split('.');
    const digitNumber = (numbers[1] ? numbers[1].length : 0)
    if (digitNumber <= decimalPoint){
      setNoValue(value)
    }
  }

  const fillNumber = () => {
    let numbers = String(noValue).split('.');
    const digitNumber = (numbers[1] ? numbers[1].length : 0)
    if (digitNumber < decimalPoint){
      setNoValue(Number(noValue).toFixed(decimalPoint))
    }
    if (!digitNumber){
      setNoValue('')
    }
  }

  return(
    <div data-testid='numberInputElement' className={styles.numberInputContainer}>
      <label>{labelText}</label>
      <input type='number' placeholder={placeholder} value={noValue} onChange={(e)=>{
        fixedNumber(e.target.value)
      }
      } onBlur={()=>{
        fillNumber()
      }}/>
    </div>
  )
}

NumberInput.defaultProps = {
  type:'text',
  placeholder: '回答を入力'
}

export default NumberInput;
