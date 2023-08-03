import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SelectOptionsDouble from '../testDouble/SelectOptionsDouble'
import PullDown from './PullDown'


describe('Drop down compornent',()=>{
  beforeEach(()=>{
    render(
      <PullDown items={SelectOptionsDouble}/>
    )
  })

  it('Necessary elements should be visible when rendered.', () => {
    expect(screen.queryByText('testOption1')).not.toBeInTheDocument()
    expect(screen.queryByText('testOption2')).not.toBeInTheDocument()
     expect(screen.queryByAltText('testOption1')).not.toBeInTheDocument()
     expect(screen.queryByAltText('testOption2')).not.toBeInTheDocument()
  })

  it('Click on an input element to see its name and image.', async () => {
    const inputElement = screen.getByRole('textbox');

    await userEvent.click(inputElement)

    await waitFor(() =>expect(screen.getByText('testOption1')).toBeInTheDocument())
    await waitFor(() =>expect(screen.getByText('testOption2')).toBeInTheDocument())
    await waitFor(() => expect(screen.getByAltText('testOption1')).toBeInTheDocument())
    await waitFor(() => expect(screen.getByAltText('testOption2')).toBeInTheDocument())
  })

  it('Selection disappears when deactivated', async () => {
    const inputElement = screen.getByRole('textbox');

    await userEvent.click(inputElement)
    const outsideElement = document.createElement('div');
    document.body.appendChild(outsideElement);
    await userEvent.click(outsideElement);

    await waitFor(() =>expect(screen.queryByText('testOption1')).not.toBeInTheDocument())
    await waitFor(() =>expect(screen.queryByText('testOption2')).not.toBeInTheDocument())
    await waitFor(() => expect(screen.queryByAltText('testOption1')).not.toBeInTheDocument())
    await waitFor(() => expect(screen.queryByAltText('testOption2')).not.toBeInTheDocument())
  })
  it('Clicking on an option does not delete the selection.', async () => {
    const inputElement = screen.getByRole('textbox');

    await userEvent.click(inputElement)
    await userEvent.click(screen.getByText('testOption1'))

    screen.debug()
    await waitFor(() =>expect(screen.getByText('testOption1')).toBeInTheDocument())
    await waitFor(() =>expect(screen.getByText('testOption2')).toBeInTheDocument())
  })

  it('Sorted by entered value', async () => {
    const inputElement = screen.getByRole('textbox');

    await userEvent.type(inputElement,'1')

    await waitFor(() => expect(screen.getByText('testOption1')).toBeInTheDocument())
    await waitFor(() => expect(screen.queryByText('testOption2')).not.toBeInTheDocument())
    await waitFor(() => expect(screen.getByAltText('testOption1')).toBeInTheDocument())
    await waitFor(() => expect(screen.queryByAltText('testOption2')).not.toBeInTheDocument())
  })


})
