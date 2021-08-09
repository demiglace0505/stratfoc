import React from "react"
import socialLinks from "../constants/socialLinks.js"

const Footer = () => {
  return (
    <footer>
      {socialLinks.map(s => {
        return (
          <a href={s.url} key={s.id}>
            {s.icon}
          </a>
        )
      })}
    </footer>
  )
}

export default Footer
