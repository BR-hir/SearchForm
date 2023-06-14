import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NumberInput from './NumberInput'

describe('Number Input',()=>{
  beforeEach(()=>{
    render(
      <NumberInput type='number' placeholder='testPlacehplder' labelText='testLabelText'/>
    )
  })

  it('should the word "testLabelText" is visible', async () => {
    expect(screen.getByText('testLabelText')).toBeInTheDocument()
  })

  it('NumberInput element are visible', () => {
    expect(screen.getByPlaceholderText('testPlacehplder')).toBeInTheDocument();
  })

  it('The input element can only contain numbers.', () => {
    expect(screen.getByPlaceholderText('testPlacehplder')).toHaveProperty('type','number');
  })
})
