import HTTP from 'http'
import FS from 'fs'
import PUG from 'pug'

const index = FS.readFileSync('./views/index.pug', 'utf-8')

// リクエスト処理
const doRequest = (request, response) => {
  FS.readFile(
    './index.html',
    'utf-8',
    (err, data) => {
      response.writeHead(200, { 'Content-Type': 'text/html' })
      response.write(PUG.render(index))
      response.end();
    }
  )
}

// サーバの起動
const SERVER = HTTP.createServer().listen(process.env.PORT, process.env.IP)
// local
// const SERVER = HTTP.createServer().listen(3005)
SERVER.on('request', doRequest)

console.log('Server Running!')
