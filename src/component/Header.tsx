import { useNavigate } from 'react-router-dom'
import styles from './Header.module.scss';

export default function Header(){
  const navigate = useNavigate()

  return (
    <div data-testid='header' className={styles.headerContainer}>
      <h1 className={styles.heading}>Fun To BoatRace</h1>
      <button type='button' onClick={()=>{
        navigate('/');
      }}>Top Page</button>
      <button type='button' onClick={()=>{
        navigate('/search');
      }}>Search</button>
    </div>
  )
}
