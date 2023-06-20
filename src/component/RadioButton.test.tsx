import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import RadioDouble from '../testDouble/RadioDouble'
import RadioButton from './RadioButton'

describe('Radio Button', ()=>{
  beforeEach(()=>{
    render(
      <RadioButton options={RadioDouble}/>
    )
  })

  it('should see radio button', () => {
    expect(screen.getByTestId('radioButton')).toBeInTheDocument()
  })

  it('The value passed in options should be displayed. ', () => {
    expect(screen.getByText('テスト1')).toBeInTheDocument();
    expect(screen.getByText('テスト2')).toBeInTheDocument();
    expect(screen.getByText('テスト3')).toBeInTheDocument();
    expect(screen.getByText('テスト4')).toBeInTheDocument();
  })
  it('Clicking again after making a selection will deselect it.', () => {
    const radioButton = screen.getByRole('radio',{name:'テスト1'});

    userEvent.click(radioButton);
    userEvent.click(radioButton);

    expect(radioButton).toHaveProperty('checked',false);
  })
})
