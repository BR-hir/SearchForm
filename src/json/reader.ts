import { SelectOption } from 'src/models/SelectOption'
import boatRacerInfoJson from './boatracer-info.json'

type StrapiResponses<T> = Readonly<{
  data: T[]
}>

export const readRacerInfo = () => boatRacerInfoJson as unknown as StrapiResponses<SelectOption>
