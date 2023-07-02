import { useState } from 'react'

const useError = (conditions: (() => void)[],message:string)=>{
  const [isError,setIsError] = useState(false)
  const [errorMessage,setErrorMessage] = useState('')

  conditions.map((condition) => {
    condition()
  })

  setErrorMessage(message)
  setIsError(conditions)

  return {isError,errorMessage}
}

export default useError
