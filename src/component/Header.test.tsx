import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header',()=>{
  beforeEach(()=>{
    render(
      <Header />
    )
  })
  it('The text of the Fun To BoarRace is visible.', () => {
    expect(screen.getByText('Fun To BoarRace')).toBeInTheDocument()
  })
})
