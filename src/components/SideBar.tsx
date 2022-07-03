import { useState } from 'react'
import UserAccount from '@components/UserAccount'
import WineIcon from '@components/WineIcon'
import Nav from './Nav'

const SideBar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        <WineIcon id='menu-icon' width={32} height={32} fill='#111111' />
      </button>
      {
        isOpen && (
          <div>
            <button onClick={() => setIsOpen(false)}>
              <WineIcon id='close-icon' width={40} height={40} fill='#1D1D1D' />
            </button>
            <UserAccount />
            <Nav />
          </div>
        )
      }
    </div>
  )
}

export default SideBar
