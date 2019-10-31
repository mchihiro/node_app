import HTTP from 'http'
import FS from 'fs'

// const HTTP = require('http')
// リクエスト処理
const doRequest = (request, response) => {
  console.log(response)
  FS.readFile(
    './index.html',
    'utf-8',
    (err, data) => {
      response.writeHead(200, { 'Content-Type': 'text/html' })
      response.write(data)
      response.end();
    }
  )
}

// サーバの起動
const SERVER = HTTP.createServer().listen(process.env.PORT, process.env.IP)
SERVER.on('request', doRequest)

console.log('Server Running!')
