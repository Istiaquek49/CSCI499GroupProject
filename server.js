import express from 'express'
import bodyParser from 'body-parser'
import next from 'next'
import searchRoutes from './routes/search-routes'
import { getInfo, getMultiItemInfo } from './services/events'
import { getCartForUser } from './clients/firebase'

const port = 3000
const dev = true
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.urlencoded({ extended: false }))
  server.use(bodyParser.json({ type: 'application/*+json' }))
  server.use(searchRoutes)

  server.get('/', (req, res) => {
    app.render(req, res, '/home')
  })

  server.get('/about', (req, res) => {
    app.render(req, res, '/about')
  })

  server.get('/cart', (req, res) => {
    // Get cart items from firebase then algolia fetch
    getCartForUser()
    .then(items => {
      console.log(items)
    })
    app.render(req, res, '/cart')
  })

  server.get('/help', (req, res) => {
    app.render(req, res, '/help')
  })


  server.get('/item', (req, res) => {
    getInfo(req.query.id)
      .then(data => {
        app.render(req, res, '/item', data)
      })
  })

  server.post('/reviews/:objectID', (req, res) => {
    const objectID = req.params.objectID

  })

  server.post('/add-item', (req, res) => {
    const itemId = req.body
    console.log(itemId)
    res.send(200)
  })

  server.get('*', (req, res) => {
    handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`Ready on http://localhost:${port}`)
  })
})