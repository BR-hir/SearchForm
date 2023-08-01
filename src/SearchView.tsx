import React from 'react'
import { SelectOption } from 'models/SelectOption'
import PullDown from './component/PullDown'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { validate, ValidatedInput, ValidatedNumberInput } from './component/hooks/withValidation'

export function SearchView() {
  const [inputValue,setInputValue] = useState('')
  const [numberInputValue,setNumberInputValue] = useState('')
  const [options,setOptions] = useState<SelectOption[]>([])
  const validateRef1 = useRef<validate>()
  const validateRef2 = useRef<validate>()

  useEffect(()=>{
    setOptions([{
      option:'option1',
      iconPass:'src/public/testIcon/おまわりさんのアイコン.svg'
    },
      {
        option:'option2',
        iconPass:'src/public/testIcon/頭のアイコン.svg'
      },
      {
        option:'option11',
        iconPass:'src/public/testIcon/おまわりさんのアイコン.svg'
      },
      {
        option:'option21',
        iconPass:'src/public/testIcon/頭のアイコン.svg'
      }
    ])
  },[])

  const minLengthCheck = (formValue:string) => {
    if (formValue.length < 15){
      throw new Error('Please enter at least 15 characters')
    }
  }
  const maximumValueCheck = (formValue:number) => {
    if (formValue < 20){
      throw new Error('Please enter a number within 20')
    }
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    validateRef1.current?.validate()
    validateRef2.current?.validate()

    // まとめてバリデーションロジックを作成したい
    // [ValidatedInput,ValidatedInput,ValidatedInput,].map //check
  }


  return (
    <form onSubmit={onSubmit}>
      <ValidatedInput
        name='input'
        ref={validateRef1}
        label='please text'
        value={inputValue}
        onChange={(event)=>{
          const target = event.target as HTMLInputElement
          setInputValue(target.value)
        }}
        validations={[minLengthCheck]}
        maxLength={20}
      />
      {/*// enforce 先にチェックしてバリデートして変更しない*/}

      <ValidatedNumberInput
        name='number input'
        ref={validateRef2}
        label='please number'
        value={numberInputValue}
        onChange={(event)=>{
          const target = event.target as HTMLInputElement
          setNumberInputValue(target.value)
        }}
        validations={[maximumValueCheck]}
      />
      <PullDown items={options}/>
      <button>submit</button>
    </form>
  )
}
