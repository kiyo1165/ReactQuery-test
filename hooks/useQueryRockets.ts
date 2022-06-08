import { request } from 'graphql-request'
import { useQuery } from 'react-query'
import { Rocket } from '../@types/types'
import { GET_ROCKETS } from '../queries/queries'

interface RocketsRes {
  rockets: Rocket[]
}

//fetch
export const fetchRockets = async () => {
  const { rockets: data } = await request<RocketsRes>(
    'https://api.spacex.land/graphql/',
    GET_ROCKETS
  )
  return data
}

//キャッシュへ保存
/*
1. useQuery<Rocket[], Error>
Errorはあらかじめ用意されている。

2. queryKey: 'rockets',
キャッシュ機構に任意の保存場所を指定する。

3.queryFn: 使用するfetchを指定,

4.staleTime: [propaty] ,
fetchで取得したキャッシュをどのぐらい最新のものと定義するか決める。
Infinity => 常に最新と定義され、以降のfetchはされなくなる。
㎳で指定することもできて、例えば10msとした場合useQueryを実施した場合前回より10ms経過していた場合はfetchを実行してキャッシュを更新する。

5.refetchOnWindowFocus
ユーザーがブラウザーにフォーカスするたびにfetchをするか指定する。

6. refetchInterval
指定したms毎にfetchを行う。
*/
export const useQueryRockets = () => {
  return useQuery<Rocket[], Error>({
    queryKey: 'rockets',
    queryFn: fetchRockets,
    staleTime: 10000,
    refetchOnWindowFocus: false,
    // refetchInterval: 3000,
  })
}
