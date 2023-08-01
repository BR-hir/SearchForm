import React from 'react'
import { render, screen } from '@testing-library/react'
import { SearchView } from './SearchView'
import '@testing-library/jest-dom'

jest.mock('./component/NumberInput', () => () => (
  <div data-testid='numberInputTestIds'  />
))
jest.mock('./component/Input', () => () => (
  <div data-testid='inputTestIds'  />
))

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
    expect(screen.getByTestId('inputTestIds')).toBeInTheDocument()
    expect(screen.getByTestId('numberInputTestIds')).toBeInTheDocument()
    expect(screen.getByRole('button',{name:'submit'})).toBeInTheDocument()
  })
})
