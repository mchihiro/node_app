import HTTP from 'http'

// const HTTP = require('http')
// リクエスト処理
const doRequest = (request, response) => {
  console.log(response)
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World\n');
  response.end();
}

// サーバの起動
const SERVER = HTTP.createServer()
SERVER.on('request', doRequest)
// SERVER.listen(3005)
SERVER.listen(process.env.PORT, process.env.IP)

console.log('Server Running!')
