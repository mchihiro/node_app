import HTTP from 'http'
import FS from 'fs'
import URL from 'url'
import PATH from 'path'
import PUG from 'pug'

const pugsPath = PATH.join(__dirname, 'src/')

const root = {
  '/': {
    'main': pugsPath + 'index.pug',
    'name': 'index.html'
  },
  '/contents': {
    'main': pugsPath + 'contents.pug',
    'name': 'contents'
  }
}

const doRequest = (req, res) => {
  const url_parts = URL.parse(req.url)

  if (typeof root[url_parts.pathname] === 'undefined'){
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end("<html><body><h1>NOT FOUND PAGE:" +
    res.url + "</h1></body></html>")
    return
  }

  const compiledFunction = PUG.compileFile(root[url_parts.pathname].main)

  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write(compiledFunction())
  res.end()
}

const SERVER = HTTP.createServer().listen(process.env.PORT, process.env.IP)
SERVER.on('request', doRequest)
console.log('Server Running!')
