import Link from 'next/link'
import WineIcon from './WineIcon'

const UserAccount = (): JSX.Element => {
  return (
    <div>
      <Link href='/conta'>
        <a>
          <WineIcon id='account-icon' />
        </a>
      </Link>
    </div>
  )
}

export default UserAccount
