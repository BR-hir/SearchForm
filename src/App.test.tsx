import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'
import {App} from './App'

const renderApplication=async ()=>{

  await act(async ()=>{
    render(
        <App />
    )
  })
}

describe('App compornent',()=>{
  it('Appの文字が見える', () => {
    // WHEN
    renderApplication()

    // THEN
    expect(screen.getByRole('heading',{level:1}))
    expect(screen.getByText('Fun To BOAT RACER')).toBeInTheDocument()
  })

})
