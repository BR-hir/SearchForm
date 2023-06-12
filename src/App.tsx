import { Route, Routes } from 'react-router-dom'
import { ResearchView } from './ResearchView'
import { TopView } from './TopView'

export function App() {

  return (
    <Routes>
      <Route path={'/'} element={<TopView />}></Route>
      <Route path={'/search'} element={<ResearchView />}></Route>
    </Routes>

    )
}

export default App
