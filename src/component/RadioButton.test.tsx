import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Radio } from '../models/Radio'
import RadioDouble from '../testDouble/RadioDouble'
import RadioButton from './RadioButton'

describe('Radio Button', ()=>{
  const renderRadioButtonComponent = (option:Radio[],isMultiSelect?:Boolean)=>{
    render(
      <RadioButton options={option} isMultiSelect={isMultiSelect}/>
    )
  }
  describe('single selection', () => {
    it('should see radio button', () => {
      renderRadioButtonComponent(RadioDouble)
      expect(screen.getByTestId('radioButton')).toBeInTheDocument()
    })

    it('The value passed in options should be displayed. ', () => {
      renderRadioButtonComponent(RadioDouble)
      expect(screen.getByText('テスト1')).toBeInTheDocument();
      expect(screen.getByText('テスト2')).toBeInTheDocument();
      expect(screen.getByText('テスト3')).toBeInTheDocument();
      expect(screen.getByText('テスト4')).toBeInTheDocument();
    })
    it('Clicking again after making a selection will deselect it.', () => {
      renderRadioButtonComponent(RadioDouble)
      const radioButton = screen.getByRole('radio',{name:'テスト1'});

      userEvent.click(radioButton);
      userEvent.click(radioButton);

      expect(radioButton).toHaveProperty('checked',false);
    })
  })
  describe('multi selection', () => {
    it('Ability to make multiple selections using radio buttons.', () => {
      renderRadioButtonComponent(RadioDouble,true)
      const radioButton1 = screen.getByRole('radio',{name:'テスト1'});
      const radioButton2 = screen.getByRole('radio',{name:'テスト2'});

      userEvent.click(radioButton1);
      userEvent.click(radioButton2);

      expect(radioButton1).toHaveProperty('checked',true);
      expect(radioButton2).toHaveProperty('checked',true);
    })
    it('Press the selected button again to turn off the button.', () => {
      renderRadioButtonComponent(RadioDouble,true)
      const radioButton = screen.getByRole('radio',{name:'テスト1'});

      userEvent.click(radioButton);
      userEvent.click(radioButton);

      expect(radioButton).toHaveProperty('checked',false);
    })
  })
})
