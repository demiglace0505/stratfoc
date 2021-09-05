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

### Styling backbone

For the CSS framework, gatsby's styled components plugin was used. I created a directory *themes*, which will hold all the related visual effects and the global theme. The global theme is set using styled-component's **createGlobalStyle** API.

For the global fonts, the plugin [gatsby-plugin-google-fonts](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-fonts/?=google%20fonts) was used. It can be used by declaring in the GlobalStyle component.

```scss
  body {
    box-sizing: border-box;
    background-color: ${backgrounds.bgGreyLight};
    font-size: 1.6rem;
    font-family: 'Poppins';
  }
```

### Setting up Strapi and MongoDB

I created a new MongoDB project for this application. I granted **atlasAdmin@admin** role to my user, and whitelisted my IP address. Afterwards I ran the command for bootstrapping a strapi app.

```
npx create-strapi-app stratfoc-backend
```

I setup a custom installation, choosing MongoDB for the database and connecting using the Mongo Node.js driver.

I setup the project parameters following the [official documentation](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations/databases/mongodb.html). Inside the strapi backend directory, I configured config/database.js

```javascript
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('DATABASE_URI'),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'stratfoc-backend'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});

```

The DATABASE_URI variable is obtained from the MongoDB Atlas Connect mode, the fields to replace from the connect string are the username, password, and database name.

### Connecting with Strapi

In order to be able to access our API in Gatsby with GraphQL, the plugin [gatsby-source-strapi](https://www.gatsbyjs.com/plugins/gatsby-source-strapi/?=source-strapi) needs to be installed. The gatsby-config is updated as such to resolve the plugin.

```js
     {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`work-experience`, `projects`],
       // singleTypes: [`home-page`, `contact`],
      },
```

I should be able to query for the work-experiences API endpoint via GraphQL now.

```js
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const WorkExperience = () => {
  const data = useStaticQuery(query)
  return (
    <div>{data.allStrapiWorkExperience.nodes.map(item => item.company)}</div>
  )
}

const query = graphql`
  {
    allStrapiWorkExperience(sort: {fields: createdAt, order: DESC}) {
      nodes {
        company
        date
        position
        jobDescription {
          jobDescription
          id
        }
      }
    }
  }
`

export default WorkExperience

```

### Setting up individual project pages programatically

Project pages can be set up programatically by making use of the [File System Route API](https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/). This allows us to create dynamic pages for each of our project page. We can specifiy collection routes using curly braces **{}** in the filename to signify dynamic URL segments. In the case of this site, the collection route is `{StrapiProject.title}.js` and it is in the subdirectory **projects**. *StrapiProject* is from the GraphQL query *strapiProject*, and *title* is the field that we want to be passed into the page via the **pageContext** prop. The page template starter is illustrated by the following:

```jsx
const ProjectTemplate = ({ data, pageContext: { title } }) => {
  const project = data.strapiProject
  console.log("ProjectTemplate", data)
  return (
    <div>
      <Seo
        title={title.toUpperCase()}
        description={project.description}
        image={project.image.url}
      />
      <h4>{project.title}</h4>
      {project.description}
    </div>
  )
}

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProject(title: { eq: $title }) {
      description
      title
      image {
        url
      }
      github
      url
      stack {
        stack_name
      }
    }
  }
`
```

This will generate pages for each StrapiProject node at `projects/title`

### SEO

To improve the SEO of the site, I added siteMetadata to the gatsby-config. It is important to note that the siteUrl has the end "/" removed.

```js
siteMetadata: {
    title: `Stratfoc`,
    description: `A portfolio website built in ReactJS and Gatsby by CHRISTIAN CRUZ.`,
    titleTemplate: `%s | Strategic Focus`,
    author: `@stratfoc`,
    siteUrl: `https://stratfoc.netlify.app`,
    image: "/mainimg.png",
  },
```

### 

