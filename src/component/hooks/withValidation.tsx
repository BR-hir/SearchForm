import { ComponentType, forwardRef, useState } from 'react'
import Input from '../../component/Input'

type ElementRef = HTMLElement
type Props = {
  validations?:([()=>void])
  onBlur?:()=>void
}

const withValidation = (WrappedComponent:ComponentType<Props>):ComponentType<Props> => forwardRef<ElementRef, Props>((props, ref) => {
  const [errorMessage, setErrorMessage] = useState('')

  const validate = () => {
    try{
      props.validations?.forEach(validation => validation())
    } catch (e) {
      setErrorMessage(e.message)
    }
  }

  const onBlur = () => {
      props.onBlur && props.onBlur()
      validate()
  }
  const newProps = { ...props, onBlur }
  return (
    <div>
      <WrappedComponent {...newProps} />
      {errorMessage && <div>{errorMessage}</div>}
    </div>
    )

})

export default withValidation

export const ValidatedInput = withValidation(Input)
