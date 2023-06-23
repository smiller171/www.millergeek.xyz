import * as path from 'path'

interface tool {
  file: string
  name: string
}

declare const data: tool[]
export { data }

export default {
  watch: [ '../../app/public/iconcloud/*' ],
  load(watchedFiles) {
    return watchedFiles.map(file => {
      return ({
        file: path.relative(path.join(process.cwd(), 'app/public'), file),
        name: path.basename(file, path.extname(file))
      })
    })
  }
}
