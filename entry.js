import HTTP from 'http'
import FS from 'fs'
import PUG from 'pug'

const index = FS.readFileSync('./view/index.pug', 'utf-8')

const doRequest = (req, res) => {
  const pugPage = PUG.render(index)
  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.write(pugPage)
  response.end();
}

const SERVER = HTTP.createServer().listen(process.env.PORT, process.env.IP)
SERVER.on('request', doRequest)
console.log('Server Running!')

// const index = FS.readFileSync('./view/index.pug', 'utf-8')
//
// const doRequest = (request, response) => {
//   response.writeHead(200, { 'Content-Type': 'text/html' })
//   response.write(PUG.render(index))
//   response.end();
// }
//
// const SERVER = HTTP.createServer().listen(process.env.PORT, process.env.IP)
// const SERVER = HTTP.createServer().listen(3005)
// SERVER.on('request', doRequest)
//
// console.log('Server Running!')
