import { PropsWithChildren } from 'react'
import { StyledLayout } from 'src/styles/styledComponents'
import Header from './Header'

const BaseLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <StyledLayout>
      <Header />
      <div className='pageContent'>{children}</div>
    </StyledLayout>
  )
}

export default BaseLayout
