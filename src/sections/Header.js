import React from "react"
import { Link } from "gatsby"

import navLinks from "../constants/navLinks.js"

const Header = () => {
  return (
    <div>
      <nav>
        <div>
          {navLinks.map(l => {
            return (
              <Link to={l.url} key={l.id}>
                {l.text}
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default Header
