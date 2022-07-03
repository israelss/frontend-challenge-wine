import Link from "next/link"
import WineIcon from "./WineIcon"

const UserAvatar = () => {
  return (
    <div>
      <Link href="/conta">
        <a>
          <WineIcon id="account-icon" />
        </a>
      </Link>
    </div>
  )
}

export default UserAvatar
