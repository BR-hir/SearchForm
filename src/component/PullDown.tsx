import { useEffect, useState } from 'react'
import { Player } from '../models/Player'
import * as playerRepository from '../repository/PlayerRepository'
import Select from 'react-select'
import styles from './PullDown.module.scss';

export default function PullDown(){

  const [playerInfo,setPlayerInfo] = useState<Player[]>([])
  useEffect(()=>{
    setPlayerInfo(playerRepository.fetchPlayerInfo())
  },[])

  const options = playerInfo?.map((item:Player)=>{
    return {
      value:item.name,
      label:item.name
    }
  })

  return (
    <div className={styles.pullDownContainer}>
      <label>Players List</label>
      <Select className={styles.selectForm} options={options} />
    </div>
  )
}
