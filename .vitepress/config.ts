import { defineConfig } from 'vitepress'
import { createContentLoader } from 'vitepress'


interface Job {
  company: string
  position: string
  startDate: {
    time: number
    string: string
  }
  endDate: {
    time: number
    string: string
  }
  src: string
  html: string
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Scott Miller",
  titleTemplate: "millergeek.xyz",
  description: "Personal Website",
  srcDir: "app",
  cleanUrls: true,
  lastUpdated: true,
  mpa: false,
  async buildEnd() {
    const posts = await createContentLoader('app/resume/jobs/*.md', {
      render: true,
      transform(raw): Job[] {
        return raw
          .map(({ frontmatter, src, html }) => ({
            company: frontmatter.company,
            position: frontmatter.position,
            startDate: formatDate(frontmatter.startDate),
            endDate: formatDate(frontmatter.endDate),
            src,
            html
          }))
          .sort((a, b) => b.startDate.time - a.startDate.time)
      }
    }).load()
    // generate files based on posts metadata, e.g. RSS feed
  }
})

function formatDate(raw: string): Job[ 'startDate' ] | Job[ 'endDate' ] {
  let date = new Date(raw)
  return {
    time: +date,
    string: raw
  }
}
