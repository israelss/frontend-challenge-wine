import Link from 'next/link'
import WineIcon from './WineIcon'

const Logo = (): JSX.Element => {
  return (
    <div>
      <Link href='/'>
        <WineIcon id='wine-logo' />
      </Link>
    </div>
  )
}

export default Logo
