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

  it('All necessary components are visible.', () => {
    expect(screen.getByTestId('inputElement')).toBeInTheDocument()
    expect(screen.getByTestId('pulldown')).toBeInTheDocument()
  })
})
