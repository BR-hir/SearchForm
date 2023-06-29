import { useState } from 'react'
import styles from './NumberInput.module.scss';

type Props = {
  placeholder?:string
  labelText:string
  maximumValue:string
  decimalPoint:number
}

function NumberInput(props:Props){
  const { placeholder,labelText, maximumValue, decimalPoint }= props
  const [value,setValue] = useState('')
  const [isError,setIsError] = useState(false)

  const onChangeHandler = (value)=>{
    if (maximumValue >= value){
      setValue(value)
      setIsError(false)
      return
    }
    if (maximumValue){
      setValue(maximumValue)
      setIsError(true)
    }
  }

  const onBlurHandler = () => {
    let numbers = String(value).split('.');
    const digitNumber = (numbers[1] ? numbers[1].length : 0)
    if (!value){
      setValue('')
      return
    }

    if(digitNumber !== decimalPoint){
      setValue(Number(value).toFixed(decimalPoint))
    }
  }

  return(
    <div data-testid='numberInputElement' className={styles.numberInputContainer}>
      <label>{labelText}</label>
      <input
        type='number'
        placeholder={placeholder}
        value={value}
        onChange={(e)=>{
          onChangeHandler(e.target.value)
        }}
        onBlur={()=>{
          onBlurHandler()
        }}
      />
      {isError && (
        <div>{`Cannot enter a number greater than ${maximumValue}`}</div>
      )}
    </div>
  )
}

NumberInput.defaultProps = {
  type:'text',
  placeholder: '回答を入力'
}

export default NumberInput;
