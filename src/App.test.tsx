import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'
import {App} from './App'
import { MemoryRouter } from 'react-router-dom';

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
  it('TopView is displayed when / is accessed.', async () => {
    // when
    await renderApplication('/');

    // given
    expect(
      screen.getByTestId('topViewPage')
    ).toBeInTheDocument();
  });

  it('SearchView is displayed when /search is accessed.', async () => {
    // when
    await renderApplication('/search');

    // given
    expect(
      screen.getByTestId('searchPage')
    ).toBeInTheDocument();
  });
})
