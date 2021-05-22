const fs = require('fs')
const path = `./.env`
const vars = `
 GUARDIAN_API_KEY=${process.env.GUARDIAN_API_KEY}\n
`
fs.writeFileSync(path, vars)