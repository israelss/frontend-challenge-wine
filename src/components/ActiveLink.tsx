import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import { ReactNode, useEffect, useState } from 'react'

type ActiveLinkProps = LinkProps & {
  children: ReactNode
  className?: string
}

const ActiveLink = ({ className = '', children, ...props }: ActiveLinkProps): JSX.Element => {
  const { asPath, isReady } = useRouter()

  const childClassName = className
  const [linkClassName, setLinkClassName] = useState(childClassName)

  useEffect(() => {
    if (isReady) {
      const destination = props.as ?? props.href
      const linkPathname = new URL(destination as string, location.href).pathname
      const activePathname = new URL(asPath, location.href).pathname

      const newClassName = activePathname.includes(linkPathname)
        ? `${childClassName} active`.trim()
        : childClassName

      if (newClassName !== linkClassName) setLinkClassName(newClassName)
    }
  }, [asPath, childClassName, isReady, linkClassName, props.as, props.href])

  return (
    <Link href={props.href} as={props.as} passHref>
      <a className={linkClassName}>{children}</a>
    </Link>
  )
}

export default ActiveLink
