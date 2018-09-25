const util = require('util')
const fs = require('fs')

util.promisify(fs.readFile)('../package.json')
  .then(data => {
    return JSON.parse(data)
  })
  .then(data => {
    console.log(data)
  })