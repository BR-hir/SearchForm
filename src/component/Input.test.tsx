import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Input from './Input'

describe('Input compornent',()=> {

  describe('text input rendering',()=>{
    beforeEach(()=>{
      render(
        <Input label='testInputLabel'/>
      )
    })

    it('The input element can only contain numbers.', () => {
      expect(screen.getByRole('textbox')).toHaveProperty('type','text');
    })

    it('should can see label', () => {
      expect(screen.getByText('testInputLabel')).toBeInTheDocument()
    })
  })
})
