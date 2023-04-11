import rss, { pagesGlobToRssItems } from "@astrojs/rss"

export async function get() {
  return rss({
    title: "Nicoder | Blog",
    description: "Holaaa",
    site: "https://nicoder.onrender.com",
    items: await pagesGlobToRssItems(import.meta.glob("./posts/*.md")),
    customData: `<language>es-es</language>`,
    stylesheet: "/rss/styles.xsl",
  })
}
