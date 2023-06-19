import { createContentLoader } from 'vitepress'

// export default createContentLoader('app/resume/qualifications.md', {
//   render: true,
// })

export default {
  async load() {
    return (await createContentLoader('app/resume/qualifications.md', {
      render: true
    }).load())
  }
}
