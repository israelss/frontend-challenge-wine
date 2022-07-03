import Link from 'next/link'
import { StyledLogo } from 'src/styles/styledComponents'
import WineIcon from './WineIcon'

const Logo = (): JSX.Element => {
  return (
    <StyledLogo>
      <Link href='/'>
        <a>
          <WineIcon id='wine-logo' height={31} width={103} />
        </a>
      </Link>
    </StyledLogo>
  )
}

export default Logo
