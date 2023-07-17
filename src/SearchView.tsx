import { useEffect, useState } from 'react'
import { ValidatedInput } from './component/hooks/withValidation'
import { SelectOption } from './models/SelectOption'
import styles from './SearchView.module.scss'

export function SearchView() {
  const [options,setOptions] = useState<SelectOption[]>([])
  const [inputValue,setInputValue] = useState('')

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


  return (
    <div data-testid='searchPage' className={styles.searchViewContainer}>
      <ValidatedInput
        name='input'
        label='please text'
        value={inputValue}
        onBlur={()=>{}}
        onChange={(event)=>{
          const target = event.target as HTMLInputElement
          setInputValue(target.value)
        }}
        validaitons={[() => console.log('11')]}
        maxLength={10}
        />
      {/*<ValidationInput2 label='label'/>*/}
    </div>
  )
}
