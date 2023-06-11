import { Player } from '../models/Player'
import boatracerjson from '../json/boatracer-info.json'

export const fetchPlayerInfo = () => {
  const json = boatracerjson
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
