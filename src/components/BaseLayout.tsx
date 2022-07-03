import { PropsWithChildren } from 'react'
import { StyledLayout } from 'src/styles/styledComponents'
import Header from './Header'

const BaseLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  )
}

export default BaseLayout
