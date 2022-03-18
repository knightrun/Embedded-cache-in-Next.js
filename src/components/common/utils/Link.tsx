import NextLink from 'next/link'

const Link = ({ href, children, ...props }: any) => {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  )
}

export default Link
