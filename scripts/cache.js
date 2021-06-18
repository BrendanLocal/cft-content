const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

function postData() {
  const pagesDirectory = path.join(process.cwd(), 'content')
  const fileNames = fs.readdirSync(pagesDirectory)
  const pages = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(pagesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const fileContentsRead = JSON.parse(fileContents)
    const matterResult = matter(fileContents)
    return {
      id,
      url: fileContentsRead.pageURL,
      title: fileContentsRead.pageName,
      contents: matterResult.content
    }
  })
  return `export const pages = ${JSON.stringify(pages)}`
}

try {
  fs.readdirSync('cache')
} catch (e) {
  fs.mkdirSync('cache')
}

fs.writeFile('cache/data.js', postData(), function (err) {
  if (err) return console.log(err);
  console.log('Pages cached.');
})