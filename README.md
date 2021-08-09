<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->

<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Stratfoc - A personal portfolio site created with gatsby.js
</h1>

<!-- AUTO-GENERATED-CONTENT:END -->

### Setting up and structure

The project is based off gatsby's default [starter](https://www.gatsbyjs.com/starters-next/gatsbyjs/gatsby-starter-default/). For the initial structure of the project, all of the pages would be rendered with a Navbar and Footer component. For wrapping with global components, [Gatsby Browser API](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) **wrapPageElement** API was used.

```javascript
const React = require("react")
const Layout = require("./src/components/Layout").default

// Wrap every page in a Layout Component
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
```

The structure of the project is laid out below:

```
/src
|_/components
|_/constants
|_/images
|_/pages
|_/sections
```

The *constants* directory serves as the directory for constant variables such as the endpoints of both external and navigation links. The data structure for **navLinks.js** is that of an array of objects, each object represents an internal page for the navbar items, and has the properties id, text, and url. The **socialLinks.js** on the other hand, is actually a react component because the icons are React components from the react-icons library.

```jsx
import React from 'react'

import {
  FiLinkedin,
  FiGithub,
} from 'react-icons/fi'

const links = [
  {
    id: 1,
    icon: <FiLinkedin></FiLinkedin>,
    url: "https://www.linkedin.com/in/christian-manuel-cruz/"
  },
  {
    id: 2,
    icon: <FiGithub></FiGithub>,
    url: "https://github.com/demiglace0505"
  }
]

export default links
```

In the *sections* directory is where the components for each of the home page's can be found. This contains the Hero section, Services section, and Featured section.