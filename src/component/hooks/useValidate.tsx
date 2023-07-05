import { useEffect, useState } from 'react'

const useValidate = (condition?: (() => void), message?:string)=>{
  const [isError,setIsError] = useState(false)
  const [errorMessage,setErrorMessage] = useState('')

  let errorJudge:boolean
  useEffect(()=>{
    console.log("123")
    if (condition){
      // condition.map((condition) => {
        errorJudge = condition()
        if (errorJudge && message){
          setIsError(true)
          setErrorMessage(message)
        }else{
          setIsError(false)
          setErrorMessage('')
        }
      // })
    }

  },[])

  return [isError,errorMessage]
}

export default useValidate
