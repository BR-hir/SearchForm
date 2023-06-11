import { readRacerInfo } from '../json/reader'
import { Player } from '../models/Player'

export const fetchPlayerInfo = () => {
  const json = readRacerInfo()
  const player: Player[] = json.data?.map((c: Player) => {
    return {
      id: c.id,
      memberId: c.memberId,
      name:c.name,
      birthplace:c.birthplace
    }
  })
  return player ?? []
}
