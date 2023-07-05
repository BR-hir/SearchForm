import { useEffect, useState } from 'react'
import { Simulate } from 'react-dom/test-utils'
import { SelectOption } from '../models/SelectOption'
import styles from './PullDown.module.scss';
import click = Simulate.click

type Props = {
  items:SelectOption[]
  placeholder:string
}

export default function PullDown(props:Props){
  const {items,placeholder} = props

  const [isShowItems,setIsShowItems] = useState(false)
  const [inputValue,setInputValue] = useState('')
  const [selectValue,setSelectValue] = useState('')

  useEffect(()=>{
    const filteredArray = items?.filter(item => item.option.includes(inputValue));
    console.log(filteredArray)
  },[inputValue,isShowItems])

  const options = items?.map((item:SelectOption, index:number)=>{
    return(
      <div onClick={(e)=>{
        const divElement = e.target as HTMLDivElement
        setSelectValue(divElement.innerText)
      }}
           className={styles.optionContainer}
           key={`${index}-option`}
      >
        <img className={styles.icon} src={item.iconPass} alt={item.option}/>
        {item.option}
      </div>
      )
  })
  const onClickHandler=() => {
    setIsShowItems(!isShowItems)
  }

  return (
    <div className={styles.pullDownContainer} >
      <input
        className={styles.pullDownInput}
        value={selectValue}
        onChange={(e)=>{
          setInputValue(e.target.value)
        }}
        placeholder={placeholder}
        onClick={onClickHandler}
      />
      {isShowItems && (
        options
      )}
    </div>
  )
}
