import HTTP from 'http'
import FS from 'fs'

// const HTTP = require('http')
// リクエスト処理
const doRequest = (request, response) => {
  console.log(response)
  response.writeHead(200, {'Content-Type': 'text/plain'});
  FS.readfile('./index.html', 'utf-8', response.write('200', {'Content-type', 'text/html'}))
  response.end();
}

// サーバの起動
const SERVER = HTTP.createServer().listen(process.env.PORT, process.env.IP)
SERVER.on('request', doRequest)

console.log('Server Running!')
