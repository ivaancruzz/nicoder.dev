---
layout: "../../layouts/MarkdownPostLayout.astro"
title: "My First Blog Post"
pubDate: "2023-4-11"
description: "This is the first post of my new Astro blog."
banner: "https://geekflare.com/wp-content/uploads/2020/06/python-hosting.jpg"
alt: "The Astro logo with the word One."
tags: ["Python"]
---

# My First Blog Post Published on: 2022-07-01 Welcome to my _new blog_ about

learning Astro! Here, I will share my learning journey as I build a new website.

## What I've accomplished 1. **Installing Astro**: First, I created a new Astro

project and set up my online accounts. 2. **Making Pages**: I then learned how
to make pages by creating new `.astro` files and placing them in the
`src/pages/` folder. 3. **Making Blog Posts**: This is my first blog post! I now
have Astro pages and Markdown posts! ## What's next I will finish the Astro
tutorial, and then keep adding more posts. Watch this space for more to come.

```javascript
// recuperamos las dependencias
const express = require("express")
const shinkRay = require("shrink-ray-current")
// inicialización del server
const app = express()
// servimos la carpeta public que tendrá los estáticos
app.use(express.static("public"))
// comprimir todas las peticiones
app.use(shrinkRay())
// inicializamos el servidor
app.listen(process.env.PORT, () =>
  console.log(`App running on port ${process.env.PORT}`)
)
```
