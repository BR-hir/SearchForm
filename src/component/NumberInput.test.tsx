import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NumberInput from './NumberInput'

describe('Number Input',()=>{
  beforeEach(()=>{
    render(
      <NumberInput />
    )
  })

  it('The word "add NumberText" is visible', async () => {
    expect(screen.getByText('add number text')).toBeInTheDocument()
  })

  it('NumberInput element are visible', () => {
    expect(screen.getByPlaceholderText('Please input NumberText')).toBeInTheDocument();
  })


  it('The input element can only contain numbers.', () => {
    expect(screen.getByPlaceholderText('Please input NumberText')).toHaveProperty('type','number');
  })
})
