import React from "react"
import Seo from "../components/seo.js"

const Contact = () => {
  return (
    <div>
      <Seo title="Contact" />
      <h1>contact page</h1>
      <form action="https://formspree.io/f/mayalybg" method="POST">
        <input type="email" name="email" placeholder="Your email" />
        <input type="text" name="name" placeholder="Your name" />
        <textarea name="message" rows="5" placeholder="Your message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact
