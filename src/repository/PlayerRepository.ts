import { readRacerInfo } from '../json/reader'
import { SelectOption } from 'src/models/SelectOption'

export const fetchPlayerInfo = () => {
  const json = readRacerInfo()
  const player: SelectOption[] = json.data?.map((c: SelectOption) => {
    return {
      id: c.id,
      memberId: c.memberId,
      name:c.name,
      birthplace:c.birthplace
    }
  })
  return player ?? []
}
