import { render, screen } from '@testing-library/react'
import { SearchView } from './SearchView'
import '@testing-library/jest-dom'

const mockNavigateSpy = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigateSpy,
}));

describe('SearchView',()=>{
  beforeEach(()=>{
    render(
      <SearchView />
    )
  })
  it('should see header text',()=> {
    expect(screen.getByText('Fun To BoatRace')).toBeInTheDocument()
  })

  it('should see the inputElement,numberElement,pullDownlist',()=>{
    const inputCount = screen.getAllByTestId('inputElement')

    expect(inputCount.length).toBe(2);
  })

  it('should see the pullDownList',()=>{
    expect(screen.getByTestId('pullDownList')).toBeInTheDocument();
  })

})
