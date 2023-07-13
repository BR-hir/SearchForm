import withValidation from './hooks/withValidation'
import { FormEventHandler, useEffect } from 'react'
import styles from './Input.module.scss'

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
  validations?:{condition:()=>void,errorMessage:string}
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
    validations,
  } = props;
  // useEffect(()=>{
    // ValidatedInputが最後に描画される
    const ValidatedInput = withValidation(validations)(Input)
  //   console.log(test)
  //
  // },[])

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
        required={required}
      />
      <withValidation />
      <ValidatedInput />
    </div>
  )
}

// export default withValidation(Input)


Input.defaultProps = {
  errorCondition:()=>false,
  errorMsg:''
}

export default Input;
