import { useEffect, useState } from 'react'
import { Player } from '../models/Player'
import * as playerRepository from '../repository/PlayerRepository'
import styles from './PullDown.module.scss';

export default function PullDown(){

  const [playerInfo,setPlayerInfo] = useState<Player[]>([])
  useEffect(()=>{
    setPlayerInfo(playerRepository.fetchPlayerInfo())
  },[])

  const options = playerInfo?.map((item:Player, index:number)=>{
    return <option key={`${index}-player`} value={item.name} />
  })

  return (
    <div className={styles.pullDownContainer}>
      <label>Players List</label>
      <input data-testid='textInput' type="text" list="keywords" />
        <datalist id="keywords" >
          {options}
        </datalist>
    </div>
  )
}
