import * as path from 'path'

interface Job {
  file: string
  name?: string

  company?: string
  position?: string
  startDate?: {
    time: number
    string: string
  }
  endDate?: {
    time: number
    string: string
  }
  src?: string
  html?: string
}

declare const data: Job[]
export { data }

export default {
  watch: [ '../../app/resume/jobs/*.md' ],
  load(watchedFiles) {
    return watchedFiles.map(file => {
      return ({
        file: path.relative(path.join(process.cwd(), 'app/resume/jobs'), file),
        name: path.basename(file, path.extname(file))
        
      })
    })
  }
}

// export default createContentLoader('app/resume/jobs/*.md', {
//   render: true,
//   transform(raw): Job[] {
//     return raw
//       .map(({ frontmatter, src, html }) => ({
//         company: frontmatter.company,
//         position: frontmatter.position,
//         startDate: formatDate(frontmatter.startDate),
//         endDate: formatDate(frontmatter.endDate),
//         src,
//         html
//       }))
//       .sort((a, b) => b.startDate.time - a.startDate.time)
//   }
// })

function formatDate(raw: string): Job[ 'startDate' ] | Job[ 'endDate' ] {
  let date = new Date(raw)
  return {
    time: +date,
    string: raw
  }
}
