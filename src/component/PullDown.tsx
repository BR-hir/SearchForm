import { useEffect, useState } from 'react'
import { SelectOption } from 'models/SelectOption'
import styles from './PullDown.module.scss';

type Props = {
  items:SelectOption[]
  placeholder:string
}

export default function PullDown(props:Props){
  const {items,placeholder} = props

  const [isShowItems,setIsShowItems] = useState(false)
  const [inputValue,setInputValue] = useState('')
  const [selectValue,setSelectValue] = useState('')

  const options = items?.filter(item => item.option.includes(inputValue)).map((item:SelectOption, index:number)=>{
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

  return (
    <div data-testid='pulldown' className={styles.pullDownContainer} >
      <input
        className={styles.pullDownInput}
        value={selectValue}
        onChange={(e)=>{
          setInputValue(e.target.value)
        }}
        onClick={()=>setIsShowItems(true)}
        placeholder={placeholder}
        onBlur={()=>{
          setIsShowItems(false)
        }}
      />
      {isShowItems && (
        options
      )}
    </div>
  )
}
