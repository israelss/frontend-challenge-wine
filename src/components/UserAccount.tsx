import Link from "next/link"
import WineIcon from "./WineIcon"

const UserAvatar = () => {
  return (
    <div>
      <Link href="/conta">
        <WineIcon id="account-icon" />
      </Link>
    </div>
  )
}

export default UserAvatar
