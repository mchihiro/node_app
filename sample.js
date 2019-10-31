import HTTP from 'http'
import FS from 'fs'

// const HTTP = require('http')
// リクエスト処理
const doRequest = (request, response) => {
  const random = Math.floor(Math.random() * 3)
  FS.readFile(
    './index.html',
    'utf-8',
    (err, data) => {
      const content =  ['hallo world1', 'hallo world2', 'hallo world3']
      const dataCase = data.replace(/@content@/g, content[random])
      response.writeHead(200, { 'Content-Type': 'text/html' })
      response.write(dataCase)
      response.end();
    }
  )
}

// サーバの起動
const SERVER = HTTP.createServer().listen(process.env.PORT, process.env.IP)
SERVER.on('request', doRequest)

console.log('Server Running!')
