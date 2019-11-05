import HTTP from 'http'
import FS from 'fs'
import URL from 'url'
import PATH from 'path'
import QS from 'querystring'
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
  },
  '/post': {
    'main': pugsPath + 'post.pug',
    'name': 'post'
  }
}

const doRequest = (req, res) => {
  const url_parts = URL.parse(req.url)

  if (typeof root[url_parts.pathname] === 'undefined'){
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<html><body><h1>NOT FOUND PAGE:' +
    res.url + '</h1></body></html>')
    return
  }


  if (url_parts.pathname === '/post') {
    let postData = ''
    let postCase = req.on('data', data => {
      postData += data
      return postData
    })

    req.on('end', () => {
      const postMessage = QS.parse(postData)
      const renderPug = PUG.renderFile(root[url_parts.pathname].main, { postmessage: postMessage.formtest })
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(renderPug)
      res.end()
    })
  } else {
    const compiledFunction = PUG.compileFile(root[url_parts.pathname].main)
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(compiledFunction())
    res.end()
  }

}

// 本番用
const SERVER = HTTP.createServer().listen(process.env.PORT, process.env.IP)
// local用
// const SERVER = HTTP.createServer().listen(3005)
SERVER.on('request', doRequest)
console.log('Server Running!')
