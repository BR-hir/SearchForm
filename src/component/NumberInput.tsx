import { useState } from 'react'
import styles from './NumberInput.module.scss';

type Props = {
  placeholder?:string
  labelText:string
  decimalPoint:number
}

function NumberInput(props:Props){
  const { placeholder,labelText, decimalPoint }= props
  const [numberValue,setNumberValue] = useState('')


  const fillNumber = () => {
    let numbers = String(numberValue).split('.');

    const digitNumber = (numbers[1] ? numbers[1].length : 0)
    if (digitNumber !== decimalPoint){
      setNumberValue(Number(numberValue).toFixed(decimalPoint))
    }
  }

  return(
    <div data-testid='numberInputElement' className={styles.numberInputContainer}>
      <label>{labelText}</label>
      <input type='number' placeholder={placeholder} value={numberValue} onChange={(e)=>{
        setNumberValue(e.target.value)
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
