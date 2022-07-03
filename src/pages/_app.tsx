import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import BaseLayout from '@components/BaseLayout'
import { CartProvider } from '@contexts/cart'
import { FilterProvider } from '@contexts/filter'
import wineTheme from 'src/styles/theme'
import GlobalStyles from 'src/styles/globals'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={wineTheme}>
      <FilterProvider>
        <CartProvider>
          <GlobalStyles />
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        </CartProvider>
      </FilterProvider>
    </ThemeProvider>
  )
}

export default MyApp
