import React from 'react'
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'
import { SearchView } from 'SearchView'
import { TopView } from 'TopView'
import App from './App'
import { MemoryRouter } from 'react-router-dom';
import mocked = jest.mocked

jest.mock('./SearchView')
jest.mock('./TopView')

const renderApplication=async (url:string)=>{

  await act(async ()=>{
    render(
      <MemoryRouter initialEntries={[url]}>
        <App />
      </MemoryRouter>,
    )
  })
}

describe('App Routing',()=>{
  beforeEach(()=>{
    mocked(TopView).mockImplementation(() => <div data-testid="topView" />)
    mocked(SearchView).mockImplementation(() => <div data-testid="searchView" />)
  })
  it('TopView is displayed when / is accessed.', async () => {
    // when
    await renderApplication('/');

    // given
    expect(
      screen.getByTestId('topView')
    ).toBeInTheDocument();
  });

  it('SearchView is displayed when /search is accessed.', async () => {
    // when
    await renderApplication('/search');

    // given
    expect(
      screen.getByTestId('searchView')
    ).toBeInTheDocument();
  });
})
