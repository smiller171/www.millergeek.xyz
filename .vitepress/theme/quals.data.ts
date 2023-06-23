import { createContentLoader } from 'vitepress'

declare const data
export { data }

export default createContentLoader('app/resume/qualifications.md', {
  render: true,
})
