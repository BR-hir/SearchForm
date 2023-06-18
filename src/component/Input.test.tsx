import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Input from './Input'

describe('Input compornent',()=>{
  describe('text input rendering',()=>{
    beforeEach(()=>{
      render(
        <Input type='text' placeholder='Please enter text in placeholder' title='testTitle'/>
      )
    })

    it('should see the text "Please enter text in placeholder".',()=>{
      expect(screen.getByPlaceholderText('Please enter text in placeholder'))
    })

    it('The input element can only contain numbers.', () => {
      expect(screen.getByPlaceholderText('Please enter text in placeholder')).toHaveProperty('type','text');
    })

    it('should can see title', () => {
      expect(screen.getByText('testTitle')).toBeInTheDocument()
    })
  })

  describe('Number compornent',()=>{
    beforeEach(()=>{
      render(
        <Input type='number' placeholder='Please enter numberText in placeholder' title='testNumberTitle'/>
      )
    })

    it('should see the text "Please enter numberText in placeholder".',()=>{
      expect(screen.getByPlaceholderText('Please enter numberText in placeholder'))
    })

    it('should see the text "testNumberTitle".',()=>{
      expect(screen.getByText('testNumberTitle')).toBeInTheDocument()
    })
  })
})
