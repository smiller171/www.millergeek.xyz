import { createContentLoader } from 'vitepress'

let data
export { data }

export default createContentLoader('app/resume/qualifications.md', {
  render: true,
})
