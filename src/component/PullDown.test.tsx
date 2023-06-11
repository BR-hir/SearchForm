import { render, screen } from '@testing-library/react'
import PlayerDouble from '../testDouble/PlayerDouble'
import PullDown from './PullDown'
import '@testing-library/jest-dom'
import * as playerRepository from '../repository/PlayerRepository'

jest.mock('../repository/PlayerRepository')

describe('Drop down compornent',()=>{
  beforeEach(()=>{

    render(
      <PullDown />
    )
  })

  it('The word "select category" is visible', async () => {
    expect(screen.getByText('Players List')).toBeInTheDocument()
  })

  it('Input element are visible', () => {
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  })

  it('call playerRepository fetchPlayerInfo', () => {
    const test = jest.spyOn(playerRepository, 'fetchPlayerInfo').mockReturnValue(PlayerDouble)
    expect(test).toHaveBeenCalled()
    jest.restoreAllMocks()
  })
})
