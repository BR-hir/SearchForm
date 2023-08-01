import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import NumberInput from './NumberInput'

const maximumValue = 30

describe('Number Input',()=>{
  beforeEach(()=>{
    render(
      <NumberInput label='testLabelText' />
    )
  })

  it('should see number input component', async () => {
    expect(screen.getByText('testLabelText')).toBeInTheDocument()
  })


  xit('A specified number of digits can be displayed after the decimal point',async () => {
    const inputElement = screen.getByText('testLabelText')

    userEvent.type(inputElement, '12.111111')
    userEvent.tab()

    expect(inputElement.value).toBe('12.11')
  })

  xit('Input is fill in zero',async () => {
    const inputElement = screen.getByPlaceholderText('testPlacehplder')

    userEvent.type(inputElement, '12')
    userEvent.tab()

    expect(inputElement.value).toBe('12.00')
  })

  xit('Cannot enter numbers over 30',async () => {
    const inputElement = screen.getByPlaceholderText('testPlacehplder')

    userEvent.type(inputElement, '50')

    expect(inputElement.value).toBe('30')
    expect(screen.getByText(`Cannot enter a number greater than ${maximumValue}`))
  })
})
