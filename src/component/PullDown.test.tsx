import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
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

  it('Input elements containing datalist are visible.', () => {
    expect(screen.getByTestId('textInput')).toBeInTheDocument();
  })

  xit('Clicking on the input element allows you to enter text and sort it.', async () => {
    // given
    jest.spyOn(playerRepository, 'fetchPlayerInfo').mockReturnValue(PlayerDouble)
    const inputElement = screen.getByTestId('textInput');

    // when

    await act(async () => {
      userEvent.type(inputElement, 'taro');
    });

    // then
    expect(screen.getByText('hoge taro/保下 太郎')).toBeInTheDocument()
  })

  it('call playerRepository fetchPlayerInfo', () => {
    const test = jest.spyOn(playerRepository, 'fetchPlayerInfo').mockReturnValue(PlayerDouble)
    expect(test).toHaveBeenCalled()
    jest.restoreAllMocks()
  })
})
