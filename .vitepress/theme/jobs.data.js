import { createContentLoader } from 'vitepress'

let data
export { data }

export default createContentLoader('app/resume/jobs/*.md', {
  render: true,
  transform(raw) {
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
})

function formatDate(raw) {
  let date = new Date(raw)
  return {
    time: +date,
    string: raw
  }
}
