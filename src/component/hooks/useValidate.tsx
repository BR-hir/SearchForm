import { useEffect, useState } from 'react'

const useValidate = (conditions?: (() => boolean), message?:string)=>{
  const [isError,setIsError] = useState(false)
  const [errorMessage,setErrorMessage] = useState('')

  let errorJudge:boolean
  useEffect(()=>{
    console.log("123")
    if (conditions){
      // conditions.map((condition) => {
        errorJudge = conditions()
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
