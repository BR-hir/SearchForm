import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import NumberInput from './NumberInput'

describe('Number Input',()=>{
  beforeEach(()=>{
    render(
      <NumberInput  placeholder='testPlacehplder' labelText='testLabelText' decimalPoint={2} />
    )
  })

  it('should the word "testLabelText" is visible', async () => {
    expect(screen.getByText('testLabelText')).toBeInTheDocument()
  })

  it('Only numbers can be entered for input elements.', () => {
    expect(screen.getByPlaceholderText('testPlacehplder')).toHaveProperty('type','number');
  })

  xit('A specified number of digits can be displayed after the decimal point',async () => {
    // given
    const inputElement = screen.getByPlaceholderText('testPlacehplder')

    // when
    userEvent.type(inputElement, '12.111111')

    // then
    expect(inputElement).toHaveValue('12.1')
  })

  xit('Input is fill in zero',async () => {
    // given
    const inputElement = screen.getByPlaceholderText('testPlacehplder')

    // when
    userEvent.type(inputElement, '12')
    console.log(inputElement)
    userEvent.tab()

    // then
    expect(inputElement).toHaveValue('12.0')
  })
})
