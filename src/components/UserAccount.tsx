import Link from 'next/link'
import { StyledUserAccount } from 'src/styles/styledComponents'
import WineIcon from './WineIcon'

const UserAccount = (): JSX.Element => {
  return (
    <StyledUserAccount>
      <Link href='/conta'>
        <a>
          <WineIcon id='account-icon' height={72} width={72} />
        </a>
      </Link>
    </StyledUserAccount>
  )
}

export default UserAccount
