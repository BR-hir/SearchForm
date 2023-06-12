import PullDown from './component/PullDown'
import NumberInput from './component/NumberInput'
import Input from './component/Input'
import Header from './component/Header'

export function ResearchView() {

  return (
    <div data-testid='searchPage'>
      <Header />
      <Input />
      <NumberInput />
      <PullDown />
    </div>

  )
}
