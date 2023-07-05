import { useContext, } from 'react'
import { informationContext } from '../contexts/InformationContextProvider'

const useValidate = (conditions?: (() => void)[])=>{
  const { isError,setIsError,errorMessage } = useContext(informationContext)!

  conditions?.map((condition)=>{
    condition()
  })

  return [isError,setIsError,errorMessage]
}

export default useValidate
