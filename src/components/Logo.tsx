import Link from 'next/link'
import WineIcon from './WineIcon'

const Logo = (): JSX.Element => {
  return (
    <div>
      <Link href='/'>
        <a>
          <WineIcon id='wine-logo' />
        </a>
      </Link>
    </div>
  )
}

export default Logo
