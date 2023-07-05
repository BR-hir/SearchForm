import React,{ createContext, ReactNode, useState } from 'react'

export type Information = {
  isError:boolean
  setIsError: (value: boolean) => void;
  errorMessage:string
  setErrorMessage:(value: string) => void;
}

export type Props = Readonly<{
  children: ReactNode
}>

export const informationContext = createContext<Information | null>(null)

export const InformationContextProvider: React.FC<Props> = ({ children }) => {
  const [isError,setIsError] = useState<boolean>(false)
  const [errorMessage,setErrorMessage] = useState<string>('')


  return (
    <informationContext.Provider
      value={{
        isError: isError,
        setIsError,
        errorMessage:errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </informationContext.Provider>
  )
}

