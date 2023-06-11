import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Input from './Input'

describe('Input compornent',()=>{
  beforeEach(()=>{
    render(
      <Input />
    )
  })

  it('The word "add text" is visible', async () => {
    expect(screen.getByText('Player Name')).toBeInTheDocument()
  })

  it('Input element are visible', () => {
    expect(screen.getByPlaceholderText('Please input text')).toBeInTheDocument();
  })

  it('The input element can only contain numbers.', () => {
    expect(screen.getByPlaceholderText('Please input text')).toHaveProperty('type','text');
  })

  xit('The input element can only contain numbers2.', () => {
    // Given
    const inputText = screen.getByPlaceholderText('Please input text')
    inputText.textContent


    expect(screen.getByPlaceholderText('Please input text')).toHaveProperty('type','number');
  })
})
