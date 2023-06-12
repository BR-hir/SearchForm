import { useNavigate } from 'react-router-dom'

export function TopView() {
  const navigate = useNavigate()

  return (
    <>
      <button type='button' onClick={()=>{
        navigate('/search');
      }}>search</button>
    </>

  )
}
