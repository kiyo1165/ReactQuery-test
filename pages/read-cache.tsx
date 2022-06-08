import Link from 'next/link'
import { Layout } from '../components/Layout'
import { useQueryClient } from 'react-query'
import { Rocket } from '../@types/types'
import { RocketItem } from '../components/RocketItem'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'

/*
useQueryClientを使用すると好きなコンポーネントからcacheを取得することができる。

1. const queryClient = useQueryClient()
初期化

2. const data = queryClient.getQueriesData<Rocket[]>('rockets')
データにアクセスする場合は取得したいdataのkeyを指定する。
 */

const ReadCache = () => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<Rocket[]>('rockets')
  return (
    <Layout title="read-cache">
      <p className="my-5 text-blue-500 text-xl font-bold">
        Read out cache data
      </p>
      <ul>
        {data?.map((rocket) => {
          return <RocketItem key={rocket.id} rocket={rocket} />
        })}
      </ul>
      <Link href="/" passHref>
        <div className="mt-20 flex items-center cursor-pointer">
          <ChevronDoubleLeftIcon className="h-5 w-5 mx-1 text-blue-500" />
        </div>
      </Link>
    </Layout>
  )
}

export default ReadCache
