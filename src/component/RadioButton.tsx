import { useState } from 'react'
import { Radio } from '../models/Radio'

type Props = {
  options: Radio[]
  isMultiSelect?:Boolean
}

function RadioButton(props:Props){
  const {options,isMultiSelect} = props

  const [isChecked,setIsChecked] = useState('');
  const [selectOptions,setSelectOptions] = useState([])

  const handleCheckd = (event:string)=>{
    setIsChecked((prev) =>{
      return prev === event ? '':event
    }
    )
  }

  const optionChange = (option)=>{
    if (selectOptions.includes(option)){
      setSelectOptions(selectOptions.filter((item)=>item !== option))
    }else{
      setSelectOptions([...selectOptions,option])
    }
  }


  return (
    <div data-testid = 'radioButton'>
      {options.map((option,index)=>{
        return(
          <label key={`${index}-radio`}>
            {isMultiSelect && (
              <>
                <input type='radio' value={option.value} onChange={()=>{}} onClick={()=>{optionChange(option.value)}} checked={selectOptions.includes(option.value)} />
                  {option.label}
              </>
            )}
            {!isMultiSelect && (
              <>
                <input type='radio' value={option.value} onChange={()=>{}} checked={isChecked === option.value} onClick={(e)=>{handleCheckd((e.target as HTMLButtonElement).value)}} />
                  {option.label}
              </>
            )}
          </label>
        )
      })}
    </div>
  )}


RadioButton.defaultProps = {
  isMultiSelect:false,
}

export default RadioButton;
