import { FormEvent, FormEventHandler, useEffect, useState } from 'react'
import useValidate from './hooks/useValidate'
import styles from './Input.module.scss'
import InputFieldValidator from './validators/InputFieldValidator'
import { ValidationError } from './validators/ValidationResult'

type Props = {
  label:string
  name:string
  value:string
  placeholder?: string
  onChangeHandler:FormEventHandler<HTMLInputElement>,
  htmlFor?:string
  maxLength?:number
  minLength?:number
  required?:boolean
  errorCondition:()=>void
}

function Input(props:Props){
  const {
    label,
    name,
    value,
    placeholder,
    onChangeHandler,
    htmlFor,
    maxLength,
    minLength,
    required,
    errorCondition,
    errorMsg
  } = props;

  const [invokeError,setInvokeError] = useState(false)

  const [isError,errorMessage] = useValidate(errorCondition,errorMsg)

  const onBlur = (event : FormEvent<HTMLInputElement>)=>{
    const target = event.target as HTMLInputElement
    target.checkValidity()
  }

  const onFocus = () => {
    setInvokeError(false)
  }

  return (
    <div data-testid='inputElement' className={styles.inputContainer}>
      <label htmlFor={htmlFor} >{label}</label>
      <input
        className={styles.textInput}
        name={name}
        value={value}
        onChange={onChangeHandler}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        // onInvalid={onInvalid}
        required={required}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {isError &&(
        <p>{errorMessage}</p>
      )}
    </div>
  )
}


Input.defaultProps = {
  errorCondition:()=>false,
  errorMsg:''
}

export default Input;
