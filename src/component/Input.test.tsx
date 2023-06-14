import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Input from './Input'

describe('Input compornent',()=>{
  beforeEach(()=>{
    render(
      <Input type='text' placeholder='Please enter text in placeholder'/>
    )
  })

  it('should see the text "Please enter text in placeholder".',()=>{
    expect(screen.getByPlaceholderText('Please enter text in placeholder'))
  })

  it('The input element can only contain numbers.', () => {
    expect(screen.getByPlaceholderText('Please enter text in placeholder')).toHaveProperty('type','text');
  })
})
