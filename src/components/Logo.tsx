import Link from "next/link"
import WineIcon from "./WineIcon"

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <WineIcon id="wine-icon" />
      </Link>
    </div>
  )
}

export default Logo
