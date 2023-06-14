import Input from './Input'
import styles from './NumberInput.module.scss';

type Props = {
  type:string
  placeholder:string
  labelText:string
}

export default function NumberInput(props:Props){
  const { type,placeholder,labelText }= props
  return(
    <div className={styles.numberInputContainer}>
      <label>{labelText}</label>
      <Input type={type} placeholder={placeholder}/>
    </div>
  )
}
