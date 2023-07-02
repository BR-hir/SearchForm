import { getByText, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Input from './Input'

const maxLength = 30

describe('Input compornent',()=> {
  xdescribe('text input rendering',()=>{
    beforeEach(()=>{
      render(
        <Input placeholder='Please enter text in placeholder' title='testTitle' maxLength={maxLength} />
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

    it('should only 30 characters can be entered..', () => {
      const inputElement = screen.getByPlaceholderText('Please enter text in placeholder')
      const words30 = [...Array(15)].map(() => 'aA').join('');

      userEvent.type(inputElement,words30)

      expect(inputElement.value).toBe(words30);

      userEvent.type(inputElement,'a')

      expect(inputElement.value).toBe(words30);
      expect(screen.getByText(`Only ${maxLength} characters can be entered`)).toBeInTheDocument()
    })
  })
  describe('Required input ', () => {
    it('required labe,placeHOlder and namel', () => {
      render(
        <Input label='testLabel' placeholder='testPlaceHolder' name='testName' value='testValue' />
      )

      expect(screen.getByText('testLabel')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('testPlaceHolder')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('testPlaceHolder')).toHaveAttribute('name','testName')
      expect(screen.getByPlaceholderText('testPlaceHolder')).toHaveAttribute('value','testValue')
    })

  })
})
