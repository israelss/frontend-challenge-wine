import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BaseLayout from '@components/BaseLayout'
import { CartProvider } from '@contexts/cart'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </CartProvider>
  )
}

export default MyApp
