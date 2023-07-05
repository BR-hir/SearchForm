import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SelectOptionsDouble from '../testDouble/SelectOptionsDouble'
import PullDown from './PullDown'

jest.mock('../repository/PlayerRepository')

describe('Drop down compornent',()=>{
  beforeEach(()=>{
    render(
      <PullDown tagName='testTagName' items={SelectOptionsDouble}　placeholder='testPlaceholder'/>
    )
  })

  it('render to see the select input only', () => {
    expect(screen.getByPlaceholderText('testPlaceholder')).toBeInTheDocument()

    expect(screen.queryByText('testOption1')).not.toBeInTheDocument()
    expect(screen.queryByText('testOption2')).not.toBeInTheDocument()
    expect(screen.queryByText('testOption3')).not.toBeInTheDocument()
     expect(screen.queryByAltText('testOption1')).not.toBeInTheDocument()
     expect(screen.queryByAltText('testOption2')).not.toBeInTheDocument()
     expect(screen.queryByAltText('testOption3')).not.toBeInTheDocument()
  })

  it('Click on an input element to see its name and image.', async () => {
    const inputElement = screen.getByPlaceholderText('testPlaceholder');

    userEvent.click(inputElement)

    await waitFor(() =>expect(screen.getByText('testOption1')).toBeInTheDocument())
    await waitFor(() =>expect(screen.getByText('testOption2')).toBeInTheDocument())
    await waitFor(() =>expect(screen.getByText('testOption3')).toBeInTheDocument())
    await waitFor(() => expect(screen.getByAltText('testOption1')).toBeInTheDocument())
    await waitFor(() => expect(screen.getByAltText('testOption2')).toBeInTheDocument())
    await waitFor(() => expect(screen.getByAltText('testOption3')).toBeInTheDocument())
  })

  it('Sorted by entered value', async () => {
    const inputElement = screen.getByPlaceholderText('testPlaceholder');

    userEvent.type(inputElement,'1')

    await waitFor(() =>expect(screen.getByText('testOption1')).toBeInTheDocument())
    await waitFor(() =>expect(screen.queryByText('testOption2')).not.toBeInTheDocument())
    await waitFor(() =>expect(screen.queryByText('testOption3')).not.toBeInTheDocument())
    await waitFor(() => expect(screen.getByAltText('testOption1')).toBeInTheDocument())
    await waitFor(() => expect(screen.queryByAltText('testOption2')).not.toBeInTheDocument())
    await waitFor(() => expect(screen.queryByAltText('testOption3')).not.toBeInTheDocument())
  })

})
