import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './Header'
import '@testing-library/jest-dom'


const mockNavigateSpy = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigateSpy,
}));

describe('Header',()=>{
  beforeEach(()=>{
    render(
      <Header />
    )
  })
  it('The text of the Fun To BoarRace is visible.', () => {
    expect(screen.getByText('Fun To BoatRace')).toBeInTheDocument()
  })
  it('I can see the research button.', () => {
    // then
    expect(screen.getByRole('button',{name:'Search'})).toBeInTheDocument()
  })
  it('I can see the move topPage button.', () => {
    // then
    expect(screen.getByRole('button',{name:'Top Page'})).toBeInTheDocument()
  })

  it('Pless button jump to /search .', () => {
    // given
    const searchButton = screen.getByRole('button',{name:'Search'})

    // when
    userEvent.click(searchButton)

    // then
    expect(mockNavigateSpy).toHaveBeenCalledWith(
      '/search'
    )
  })

  it('Pless top page button jump to / .', () => {
    // given
    const topPageButton = screen.getByRole('button',{name:'Top Page'})

    // when
    userEvent.click(topPageButton)

    // then
    expect(mockNavigateSpy).toHaveBeenCalledWith(
      '/'
    )
  })
})
