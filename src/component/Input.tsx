import { FormEvent, FormEventHandler, useState } from 'react'
import useError from './hooks/useError'
import { ValidationError } from './validators/ValidationResult'
import styles from './Input.module.scss'
import InputFieldValidator from './validators/InputFieldValidator'

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
  errorMsg:string
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
  const [errorMessage,setErrorMessage] = useState('')
  // const [isError,errorMessage]= useError(errorCondition,errorMsg)

  const onInvalid= (event : FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    const target = event.target as HTMLInputElement
    const validator = new InputFieldValidator(target.value,minLength,maxLength)
    const result = validator.validate()
    if (!result.success){
      if (result.error === ValidationError.empty){
        setErrorMessage('Answer is required.')
      }
      if (result.error === ValidationError.tooShort){
        setErrorMessage(`Please enter at least ${minLength} characters`)
      }
      if (result.error === ValidationError.tooLong){
        setErrorMessage(`Up to ${maxLength} characters`)
      }
    }
    setInvokeError(true)
  }

  const onBlur = (event : FormEvent<HTMLInputElement>)=>{
    const target = event.target as HTMLInputElement
    target.checkValidity()
    // errorCondition()
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
        onInvalid={onInvalid}
        required={required}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {invokeError &&(
        <p>{errorMessage}</p>
      )}
    </div>
  )
}

export default Input;
