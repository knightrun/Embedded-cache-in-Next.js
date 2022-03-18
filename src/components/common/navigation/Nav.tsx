/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import NavLink from '@/components/common/navigation/NavLink'

const navList = [
  { title: 'Nav 1', link: '/' },
  { title: 'Nav 2', link: '/' },
  { title: 'Nav 3', link: '/' },
]

const Nav = () => {
  return (
    <nav css={navStyle}>
      <ul>
        {navList.map((item, index) => (
          <li key={index}>
            <NavLink href={item.link}>
              <span>{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav

const navStyle = css``
