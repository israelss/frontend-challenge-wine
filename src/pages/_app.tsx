import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BaseLayout from '@components/BaseLayout'
import { CartProvider } from '@contexts/cart'
import { FilterProvider } from '@contexts/filter'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FilterProvider>
      <CartProvider>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </CartProvider>
    </FilterProvider>
  )
}

export default MyApp
