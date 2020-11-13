import React from "react"
import { Link as GatsbyLink } from "gatsby"

/**
 * Credit to Gatsby for this component:
 * https://www.gatsbyjs.com/docs/gatsby-link/
 */
const Link = ({ children, to, activeClassName, partiallyActive, ...props }) => {
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...props}
      >
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}

export default Link
