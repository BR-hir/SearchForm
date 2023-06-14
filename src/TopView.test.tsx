import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { TopView } from './TopView'


const mockNavigateSpy = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigateSpy,
}));

describe('TopView',()=>{
  beforeEach(()=>{
    render(
      <TopView />
    )
  })

  it('HEADER must be displayed.', () => {
    // then
    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

})
