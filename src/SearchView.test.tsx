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

  it('should see the inputElement',()=>{
    expect(screen.getByTestId('inputElement')).toBeInTheDocument();
  })

  it('should see the numberElement',()=>{
    expect(screen.getByTestId('numberInputElement')).toBeInTheDocument();
  })

  it('should see the pullDownList',()=>{
    expect(screen.getByTestId('pullDownList')).toBeInTheDocument();
  })
})
