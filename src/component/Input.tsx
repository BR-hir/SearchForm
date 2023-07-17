import { FormEventHandler } from 'react'
import styles from './Input.module.scss'

type Props = {
  label?:string
  value?:string
  name?:string
  onChange?:FormEventHandler<HTMLInputElement>,
  onBlur:()=>void
  maxLength:number
}

function Input(props:Props){
  const {
    label,
    name,
    value,
    onChange,
    onBlur,
    maxLength,
  } = props;

  return (
    <div className={styles.inputContainer}>
      <label >{label}</label>
      <input
        className={styles.textInput}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        maxLength={maxLength}
      />
    </div>
  )
}

export default Input;
