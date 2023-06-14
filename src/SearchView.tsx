import PullDown from './component/PullDown'
import NumberInput from './component/NumberInput'
import Input from './component/Input'
import Header from './component/Header'
import styles from './SearchView.module.scss'

export function SearchView() {

  return (
    <div data-testid='searchPage' className={styles.searchViewContainer}>
      <Header />
      <Input />
      <NumberInput />
      <PullDown />
    </div>

  )
}
