import { useState } from 'react'
import styles from './Input.module.scss';

type Props = {
  id?:string
  title:string
  htmlFor?:string
  maxLength?:number
  placeholder: string
}

function Input(props:Props){
  const {
    id,
    title,
    htmlFor,
    maxLength,
    placeholder } = props;
  const [value,setValue] = useState('')
  const [isValidationError,setIsValidationError] = useState(false)

  const onChangeHandler = (value)=>{
    if (value.length <= maxLength){
      setValue(value)
      setIsValidationError(false)
    } else {
      setIsValidationError(true)
    }
  }

  return (
    <div data-testid='inputElement' className={styles.inputContainer}>
      <label htmlFor={htmlFor} >{title}</label>
      <input className={styles.textInput} value={value} placeholder={placeholder}  onChange={(e)=>{onChangeHandler(e.target.value)}} id={id}/>
      {isValidationError && (
       <div>{`Only ${maxLength} characters can be entered`}</div>
      )}
    </div>
  )
}

Input.defaultProps = {
  title:'Please add Text',
  placeholder: '回答を入力'
}

export default Input;
