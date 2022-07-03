import { PropsWithChildren } from 'react'
import Header from './Header'

const BaseLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default BaseLayout
