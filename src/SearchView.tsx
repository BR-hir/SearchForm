import { useEffect, useState } from 'react'
import RadioButton from './component/RadioButton'
import { Player } from './models/Player'
import * as playerRepository from './repository/PlayerRepository'
import NumberInput from './component/NumberInput'
import PullDown from './component/PullDown'
import Input from './component/Input'
import Header from './component/Header'
import styles from './SearchView.module.scss'

export function SearchView() {
  const [players,setPlayers] = useState<Player[]>([])

  useEffect(()=>{
    setPlayers(playerRepository.fetchPlayerInfo())
  },[])

  return (
    <div data-testid='searchPage' className={styles.searchViewContainer}>
      <Header />
      <Input />
      <NumberInput  labelText='Please enter a numerical value' decimalPoint={3}/>
      <PullDown type='text'  tagName='playerList' items={players}/>
      <RadioButton options={[{label:'ラベル1',value:'lavel1'},{label:'ラベル2',value:'lavel2'}]} />
    </div>

  )
}
