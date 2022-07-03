import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BaseLayout from '@components/BaseLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  )
}

export default MyApp
