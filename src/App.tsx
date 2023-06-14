import { Route, Routes } from 'react-router-dom'
import { SearchView } from './SearchView'
import { TopView } from './TopView'

export function App() {

  return (
    <Routes>
      <Route path={'/'} element={<TopView />}></Route>
      <Route path={'/search'} element={<SearchView />}></Route>
    </Routes>

    )
}

export default App
