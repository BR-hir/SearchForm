import styles from './Input.module.scss';


export default function Input(){

  return (
    <div className={styles.inputContainer}>
      <label htmlFor='inputText' >Player Name</label>
      <input className={styles.textInput} type='text' placeholder='Please input text' id='inputText'/>
    </div>
  )
}
