import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import NumberInput from './NumberInput'

const maximumValue = 30

describe('Number Input',()=>{
  beforeEach(()=>{
    render(
      <NumberInput  placeholder='testPlacehplder' labelText='testLabelText' decimalPoint={2} maximumValue={maximumValue} />
    )
  })

  it('should the word "testLabelText" is visible', async () => {
    expect(screen.getByText('testLabelText')).toBeInTheDocument()
  })

  it('Only numbers can be entered for input elements.', () => {
    expect(screen.getByPlaceholderText('testPlacehplder')).toHaveProperty('type','number');
  })

  xit('A specified number of digits can be displayed after the decimal point',async () => {
    const inputElement = screen.getByPlaceholderText('testPlacehplder')

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

  it('Cannot enter numbers over 30',async () => {
    const inputElement = screen.getByPlaceholderText('testPlacehplder')

    userEvent.type(inputElement, '50')

    expect(inputElement.value).toBe('30')
    expect(screen.getByText(`Cannot enter a number greater than ${maximumValue}`))
  })
})
