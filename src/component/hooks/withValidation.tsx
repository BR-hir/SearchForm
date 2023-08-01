import React from 'react'
import NumberInput from '../../component/NumberInput'
import { ComponentType, FormEvent, forwardRef, useImperativeHandle, useState } from 'react'
import Input from '../../component/Input'

type Props = {
  value?:string | number
  validations?:([(value:string)=>void])
  onChange?:(event: FormEvent<HTMLElement>)=>void
  onBlur?:()=>void
}

export interface validate {
  validate:()=>void
}

const withValidation = (WrappedComponent:ComponentType<Props>):ComponentType<Props> => forwardRef<validate, Props>((props, ref) => {
  const [errorMessage, setErrorMessage] = useState('')
  const validate = () => {
    try{
      props.validations?.forEach(validation => validation(props.value))
      setErrorMessage('')
    } catch (e) {
      setErrorMessage(e.message)
    }
  }

  useImperativeHandle(ref,()=>({
    validate
  }))

  const onBlur = () => {
      props.onBlur && props.onBlur()
      validate()
  }

  const onChange = (event:FormEvent<HTMLElement>) => {
      props.onChange && props.onChange(event)
      validate()
  }

  const newProps = { ...props, onBlur,onChange }
  return (
    <div>
      <WrappedComponent {...newProps}/>
      {errorMessage && <div>{errorMessage}</div>}
    </div>
    )

})

export default withValidation

export const ValidatedInput = withValidation(Input)
export const ValidatedNumberInput = withValidation(NumberInput)
