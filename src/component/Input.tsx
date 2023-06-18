import styles from './Input.module.scss';

type Props = {
  id?:string
  title?:string
  htmlFor?:string
  type: string
  placeholder: string
}

function Input(props:Props){
  const {
    id,
    title,
    htmlFor,
    type,
    placeholder } = props;

  return (
    <div data-testid='inputElement' className={styles.inputContainer}>
      <label htmlFor={htmlFor} >{title}</label>
      <input className={styles.textInput} type={type} placeholder={placeholder}  id={id}/>
    </div>
  )
}

Input.defaultProps = {
  type:'text',
  placeholder: '回答を入力'
}

export default Input;
