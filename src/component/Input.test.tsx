import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Input from './Input'

const maxLength = 30

describe('Input compornent',()=> {

  describe('text input rendering',()=>{
    beforeEach(()=>{
      render(
        <Input label='testInputLabel' maxLength={maxLength}/>
      )
    })

    it('The input element can only contain numbers.', () => {
      expect(screen.getByRole('textbox')).toHaveProperty('type','text');
    })

    it('should can see label', () => {
      expect(screen.getByText('testInputLabel')).toBeInTheDocument()
    })

    it('should only 30 characters can be entered..', () => {
      const inputElement = screen.getByRole('textbox')
      const words30 = [...Array(15)].map(() => 'aA').join('');

      userEvent.type(inputElement,words30)

      expect(inputElement.value).toBe(words30);

      userEvent.type(inputElement,'a')

      expect(inputElement.value).toBe(words30);
    })
  })
})
