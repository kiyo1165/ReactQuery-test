import '../styles/globals.css'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
/*
ReactQueryのstateを全体で適用するために、useStateでQueryClientを初期化し、QueryClientProviderでComponentをラップする。

ReactQueryDevtools
ブラウザーでキャッシュに格納された状態を確認する事ができる。
*/

function MyApp({ Component, pageProps }: any) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
