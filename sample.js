import HTTP from 'http'

// リクエスト処理
const doRequest = (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World\n');
  response.end();
}

// サーバの起動
const SERVER = HTTP.createServer()
SERVER.on('request', doRequest)
SERVER.listen(process.env.PORT, process.env.IP)

console.log('OK! Server Running!')
