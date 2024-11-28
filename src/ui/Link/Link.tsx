import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

interface LinkProps {
  children: React.ReactNode;
  to: string
  href?: string
}

export const LinkText: FunctionComponent<LinkProps> = ({children, ...props}) => {
  return (
    <Link {...props}>{children}</Link>
  )
}
