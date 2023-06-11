import PlayerDouble from '../testDouble/PlayerDouble'
import * as playerRepository from './PlayerRepository'
import * as reader from '../json/reader'

describe('PlayerRepository',()=>{
  it('return boatracer-info', () => {
    // given
    jest.spyOn(reader,'readRacerInfo').mockReturnValue({
      data: PlayerDouble
    })

    // when
    const fetchData = playerRepository.fetchPlayerInfo()

    // then
    expect(fetchData).toEqual([
      {
        id: 1,
        memberId : '1111',
        name : 'hoge taro/保下 太郎',
        birthplace : 'Aichi',
      },
      {
        id: 2,
        memberId : '2222',
        name : 'hoge jiro/保下 二郎',
        birthplace : 'Saitama',
      },
    ])
  })
})
