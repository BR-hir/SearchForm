import { useNavigate } from 'react-router-dom'
import Header from './component/Header'

export function TopView() {
  const navigate = useNavigate()

  return (
    <div data-testid='topViewPage'>
      <Header />
      <button type='button' onClick={()=>{
        navigate('/search');
      }}>search</button>
    </div>

  )
}
