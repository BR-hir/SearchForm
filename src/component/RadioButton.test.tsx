import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Radio } from '../models/Radio'
import RadioDouble from '../testDouble/RadioDouble'
import RadioButton from './RadioButton'

describe('Radio Button', ()=>{
  const renderRadioButtonComponent = (option:Radio[],isMultiSelect?:boolean)=>{
    render(
      <RadioButton options={option} isMultiSelect={isMultiSelect}/>
    )
  }
    it('should see radio button', () => {
      renderRadioButtonComponent(RadioDouble)
      expect(screen.getByTestId('radioButton')).toBeInTheDocument()
    })

    it('The value passed in options should be displayed. ', () => {
      renderRadioButtonComponent(RadioDouble)
      expect(screen.getByText('テスト1')).toBeInTheDocument();
      expect(screen.getByText('テスト2')).toBeInTheDocument();
      expect(screen.getByText('テスト3')).toBeInTheDocument();
      expect(screen.getByText('テスト4')).toBeInTheDocument();
    })
})
