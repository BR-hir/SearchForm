import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SearchView } from './SearchView'
import { TopView } from './TopView'
import { InformationContextProvider } from '../src/component/contexts/InformationContextProvider'

export function App() {

  return (
    <InformationContextProvider>
      <Routes>
        <Route path={'/'} element={<TopView />}></Route>
        <Route path={'/search'} element={<SearchView />}></Route>
      </Routes>
    </InformationContextProvider>

    )
}

export default App
