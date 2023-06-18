import { useEffect, useState } from 'react'
import { Player } from '../models/Player'
import * as playerRepository from '../repository/PlayerRepository'
import styles from './PullDown.module.scss';

type Props = {
  id?:string
  type:string
  list?:string
}

export default function PullDown(props:Props){
  const {id,type,list} = props

  const [playerInfo,setPlayerInfo] = useState<Player[]>([])

  useEffect(()=>{
    setPlayerInfo(playerRepository.fetchPlayerInfo())
  },[])

  const options = playerInfo?.map((item:Player, index:number)=>{
    return <option key={`${index}-player`} data-testid={item.name} value={item.name} />
  })

  return (
    <div data-testid='pullDownList' className={styles.pullDownContainer}>
      <label>Players List</label>
      <input data-testid='listInput' type={type} list={list} />
        <datalist data-testid='datalist' id={id} >
          {options}
        </datalist>
    </div>
  )
}
