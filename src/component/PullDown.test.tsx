import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import * as playerRepository from '../repository/PlayerRepository'
import PlayerDouble from '../testDouble/PlayerDouble'
import PullDown from './PullDown'

jest.mock('../repository/PlayerRepository')

describe('Drop down compornent',()=>{
  beforeEach(()=>{
  jest.spyOn(playerRepository, 'fetchPlayerInfo').mockReturnValue(PlayerDouble)
    render(
      <PullDown type='text' id='keywords'/>
    )
  })

  it('The word "select category" is visible', async () => {
    // then
    expect(screen.getByText('Players List')).toBeInTheDocument()
  })

  it('Input elements containing datalist are visible.', () => {
    // then
    expect(screen.getByTestId('listInput')).toBeInTheDocument();
  })

  it('render to see the name.', async () => {
    // then
    await waitFor(() =>expect(screen.getByTestId('hoge taro/保下 太郎')).toBeInTheDocument())
    await waitFor(() =>expect(screen.getByTestId('hoge jiro/保下 二郎')).toBeInTheDocument())
  })

  it('The keywords character must be assigned to the id in the datalist element', async () => {
    // then
    expect(screen.getByTestId('datalist')).toHaveProperty('id','keywords')
  })

  it('call playerRepository fetchPlayerInfo', () => {
    const test = jest.spyOn(playerRepository, 'fetchPlayerInfo').mockReturnValue(PlayerDouble)
    expect(test).toHaveBeenCalled()
    jest.restoreAllMocks()
  })
})
