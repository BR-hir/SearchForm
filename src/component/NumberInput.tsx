import styles from './NumberInput.module.scss';

export default function NumberInput(){
  return(
    <div className={styles.numberInputContainer}>
      <label>add number text</label>
      <input type='number' placeholder='Please input NumberText' />
    </div>
  )
}
