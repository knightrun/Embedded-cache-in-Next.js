import { useRouter } from 'next/router'
import Link from '@/components/common/utils/Link'
import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  href: string
  exact?: boolean
  [key: string]: any
}

const NavLink = ({ children, href, exact = false, ...props }: IProps) => {
  const { pathname } = useRouter()
  const isActive = exact ? pathname === href : pathname.startsWith(href)
  isActive && (props.className ? (props.className += ' active') : (props.className = 'active'))
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}

export default NavLink
