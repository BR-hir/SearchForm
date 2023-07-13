import { ValidatedInput } from 'component/hooks/withValidation'
import { useContext, useEffect, useState } from 'react'
import { informationContext } from './component/contexts/InformationContextProvider'
import PullDown from './component/PullDown'
import { SelectOption } from './models/SelectOption'
import * as playerRepository from './repository/PlayerRepository'
import Input from './component/Input'
import styles from './SearchView.module.scss'

export function SearchView() {
  // const { setIsError,setErrorMessage } = useContext(informationContext)!
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
      {/*<Header />*/}
      <Input
        value={inputValue}
        onChangeHandler={
          (event)=>{
            const target = event.target as HTMLInputElement
            setInputValue(target.value)
          }
        }
        maxLength={20}
        minLength={10}
        required
      />
      {/*<PullDown placeholder='Please Chose' items={options}/>*/}
      {/*<NumberInput  labelText='Please enter a numerical value' decimalPoint={3} maximumValue={30} />*/}
      {/*<RadioButton options={[{label:'ラベル1',value:'lavel1'},{label:'ラベル2',value:'lavel2'}]} />*/}
    </div>
    <ValidatedInput value={} onBlur={} onChange={} validaitons={[(value) => console.log(value)]}/>
  )
}
