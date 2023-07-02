import { useEffect, useState } from 'react'
import { Player } from './models/Player'
import * as playerRepository from './repository/PlayerRepository'
import Input from './component/Input'
import styles from './SearchView.module.scss'

export function SearchView() {
  const [players,setPlayers] = useState<Player[]>([])
  const [inputValue,setInputValue] = useState('')

  useEffect(()=>{
    setPlayers(playerRepository.fetchPlayerInfo())
  },[])

  return (
    <div data-testid='searchPage' className={styles.searchViewContainer}>
      {/*<Header />*/}
      <Input
        value={inputValue}
        onChangeHandler={
          (event)=>{
            const target = event.target as HTMLInputElement
            setInputValue(target.value)
          }
        }
        maxLength={15}
        minLength={10}
        required
      />
      {/*<NumberInput  labelText='Please enter a numerical value' decimalPoint={3} maximumValue={30} />*/}
      {/*<PullDown type='text'  tagName='playerList' items={players}/>*/}
      {/*<RadioButton options={[{label:'ラベル1',value:'lavel1'},{label:'ラベル2',value:'lavel2'}]} />*/}
    </div>
  )
}
