import { Player } from '../models/Player'
import styles from './PullDown.module.scss';

type Props = {
  tagName?:string
  type:string
  items:Player[]
}

export default function PullDown(props:Props){
  const {tagName,type,items} = props

  const options = items?.map((item:Player, index:number)=>{
    return <option key={`${index}-player`} data-testid={item.name} value={item.name} />
  })

  return (
    <div 'data-testid='pullDownList'' className={styles.pullDownContainer}>
      <label>Players List</label>
      <input 'data-testid='listInput'' type={type} list={tagName} />
        {/*<datalist data-testid='datalist' id={tagName} >*/}
          <div></div>
          {options}
        {/*</datalist>*/}
    </div>
  )
}
