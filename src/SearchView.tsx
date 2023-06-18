import NumberInput from './component/NumberInput'
import PullDown from './component/PullDown'
import Input from './component/Input'
import Header from './component/Header'
import styles from './SearchView.module.scss'

export function SearchView() {

  return (
    <div data-testid='searchPage' className={styles.searchViewContainer}>
      <Header />
      <Input />
      <NumberInput  labelText='Please enter a numerical value' decimalPoint={3}/>
      <PullDown type='text' />
    </div>

  )
}
