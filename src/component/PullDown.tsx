import React, { useRef } from 'react'
import { SelectOption } from 'models/SelectOption'
import { useCallback, useEffect, useMemo, useState } from 'react'
import styles from './PullDown.module.scss'

type Props = {
  items: SelectOption[]
}

export default function PullDown(props: Props) {
  const { items } = props

  const [isShowOptions, setIsShowOptions] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const [selectValues, setSelectValues] = useState([])
  const [filteredValues, setFilteredValues] = useState([])
  const [filteredOptions, setFilteredOptions] = useState([])

  const [currentIndex, setCurrentIndex] = useState(0)

  const inputRef = useRef<HTMLInputElement|null>(null)
  const pullDownRef = useRef<HTMLDivElement|null>(null)

  // 選択してもフォーカスが当たった状態を解除しないようにしたい
  // 選択された項目にもiconと削除ボタンが表示される

  useEffect(() => {
    if (!pullDownRef.current) {
      return
    }
    const handleClickOutside = () => setIsShowOptions(false)

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click',handleClickOutside)
  }, [pullDownRef])

  const selectedValues = useCallback((index: number) => {
    setSelectValues(prev => [...prev, filteredValues[index]])
  }, [items, filteredValues])

  useEffect(() => {
    setFilteredValues(() => {
      const _filteredValues = items?.filter(item => item.option.includes(inputValue) &&
        !selectValues.includes(item.option))
      return _filteredValues.map(item => item.option)
    })
  }, [items, inputValue, selectValues])

  useMemo(() => {
    const _filteredOptions = items?.filter(item => item.option.includes(inputValue) &&
      !selectValues.includes(item.option)).map((item: SelectOption, index: number) => {
      return (
        <div
          className={styles.optionContainer}
          tabIndex={0}
          onClick={() => {
            setInputValue('')
            selectedValues(index)
          }}
          style={{ backgroundColor: index === currentIndex ? 'lightblue' : 'white', }}  //classNamesを使って実装する
          key={`${index}`}
        >
          <img className={styles.icon} src={item.iconPass} alt={item.option}/>
          {item.option}
        </div>
      )
    })
    setFilteredOptions(_filteredOptions)
  }, [items, selectValues, inputValue, selectedValues])

  const keyDown = (event) => {
    console.log(event.key)
    switch (event.key) {
      case 'Backspace':
        if (!inputValue && selectValues.length > 0) {
          setSelectValues((prev) => prev.slice(0, prev.length - 1))
        }
        break
      case 'ArrowDown':
        console.log('↓')
        setCurrentIndex((prev) => Math.min(prev + 1, filteredOptions.length - 1)) //input ref
        inputRef.current?.focus()
        break
      case 'ArrowUp':
        console.log('↑')
        setCurrentIndex((prev) => Math.max(prev - 1, 0))
        inputRef.current?.focus()
        break
      case 'Enter':
        console.log('Enter')
        selectedValues(currentIndex)
        inputRef.current?.focus()
        break
      default:
        break
    }
  }
  // api使ってサーバーから結果をもらう
  // 準備ができなかスピナー

  return (
    <div
      id="pullDownContainer"
      className={styles.pullDownContainer}
      ref={pullDownRef}
    >
      <div className={styles.inputContainer}
           onClick={() => setIsShowOptions(true)}
      >
        {selectValues.length > 0 && <span>{selectValues}</span>}
        <input
          ref={inputRef}
          className={styles.pullDownInput}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
          onKeyDown={(event) => {
            keyDown(event)
          }}
        />
      </div>
      <div className={styles.option}>{isShowOptions && filteredOptions}</div>
    </div>
  )
}

//test
// auto lint setting
// use husky
