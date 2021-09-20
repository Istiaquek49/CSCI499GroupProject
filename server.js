import express from 'express'
import next from 'next'

const port = 3000
const dev = true
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/', (req, res) => {
    app.render(req, res, '/home')
  })

  server.get('/about', (req, res) => {
    app.render(req, res, '/about')
  })

  server.get('/cart', (req, res) => {
    app.render(req, res, '/cart')
  })

  server.get('/help', (req, res) => {
    app.render(req, res, '/help')
  })

  server.get('*', (req, res) => {
    handle(req, res)
  })

  server.listen(port, err => {
    if(err) throw err
    console.log(`Ready on http://localhost:${port}`)
  })
})