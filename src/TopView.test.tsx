import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TopView } from './TopView'
import '@testing-library/jest-dom'


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
  it('The text of the Fun To BoarRace is visible.', () => {
    expect(screen.getByText('Fun To BoarRace')).toBeInTheDocument()
  })
  it('I can see the research button.', () => {
    // then
    expect(screen.getByRole('button',{name:'search'})).toBeInTheDocument()
  })
  it('Pless button jump to /search .', () => {
    // given
    const jumpButton = screen.getByRole('button',{name:'search'})

    //
    userEvent.click(jumpButton)

    // then
    expect(mockNavigateSpy).toHaveBeenCalledWith(
      '/search'
    )
  })
})
