import { useWindowSize } from '@hooks/useWindowSize'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import Nav from './Nav'
import Search from './Search'
import SideBar from './SideBar'
import UserAccount from './UserAccount'
import WineBox from './WineBox'

const Header = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const { width } = useWindowSize()

  useEffect(() => {
    if (width !== undefined) {
      const isMobileScreen = width <= 375
      setIsMobile(isMobileScreen)
    }
  }, [width])

  return (
    <div>
      {isMobile && <SideBar />}
      <Logo />
      {!isMobile && <Nav />}
      <Search />
      {!isMobile && <UserAccount />}
      <WineBox />
    </div>
  )
}

export default Header
