import { FormEventHandler, useState } from 'react'
import styles from './NumberInput.module.scss';

type Props = {
  label?:string
  value?:string
  name?:string
  onChange?:FormEventHandler<HTMLInputElement>,
  onBlur:()=>void
}

function NumberInput(props:Props){
  const {
    label,
    value,
    name,
    onChange,
    onBlur,
  }=props

  return(
    <div data-testid='numberInputElement' className={styles.numberInputContainer} >
      <label>{label}</label>
      <input
        type='number'
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
}


export default NumberInput;
