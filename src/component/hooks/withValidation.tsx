import Input from 'component/Input'
import { forwardRef, useCallback, useState } from 'react'

type conditions = {
  condition?: () => void
  errorMessage?: string
}


const withValidation = ({ WrappedComponent }) => forwardRef((props, ref) => {
  const [errorMessage, setErrorMessage] = useState('')

  const validate = () => {
    try{
      props.validations.forEach(validation => validation())
    } catch (e) {
      setErrorMessage(e.message)
    }
  }

  const onBlur = () => {
      props.onBlur && props.onBlur()
      validate()
  }

  const newProps = { ...props, onBlur }
  return <div>
    <WrappedComponent {...newProps} />
    {errorMessage && <div>{errorMessage}</div>}
  </div>
}

// const withValidation = (Element,Children)=> {
//   return props => {
//     const [error,setError] = useState()
//     return <Element {...props} setError={setError} error={error}>{Children}</Element>
//   }
// }

export default withValidation

export const ValidatedInput = withValidation(Input)
