import { useEffect, useState } from 'react'
import PullDown from './component/PullDown'
import { log } from 'util'
import { SelectOption } from './models/SelectOption'
import * as playerRepository from './repository/PlayerRepository'
import Input from './component/Input'
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
      {/*<Header />*/}
      {/*<Input*/}
      {/*  value={inputValue}*/}
      {/*  onChangeHandler={*/}
      {/*    (event)=>{*/}
      {/*      const target = event.target as HTMLInputElement*/}
      {/*      setInputValue(target.value)*/}
      {/*    }*/}
      {/*  }*/}
      {/*  maxLength={15}*/}
      {/*  minLength={10}*/}
      {/*  errorCondition={()=>{*/}
      {/*    return true*/}
      {/*  }}*/}
      {/*  errorMsg='errrrrrorororororoo'*/}
      {/*  required*/}
      {/*/>*/}
      {/*<NumberInput  labelText='Please enter a numerical value' decimalPoint={3} maximumValue={30} />*/}
      <PullDown placeholder='Please Chose' items={options}/>
      {/*<RadioButton options={[{label:'ラベル1',value:'lavel1'},{label:'ラベル2',value:'lavel2'}]} />*/}
    </div>
  )
}
