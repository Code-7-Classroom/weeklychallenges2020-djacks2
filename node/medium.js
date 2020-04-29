 const fs = require('fs')
fs.readFile('medium.txt', 'utf8', (error, contents) => {
  if (error) {
    console.error(error)
    return
  }
  console.log(contents);
})