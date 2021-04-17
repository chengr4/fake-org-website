const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

const isAuthorized = (req) => {
  console.log(req.status)
  return true;
}

server.use((req, res, next) => {
  if (isAuthorized(req)) { // add your authorization logic here
    next() // continue to JSON Server router
  } else {
    res.sendStatus(401)
  }
 })

server.use('/api',router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})