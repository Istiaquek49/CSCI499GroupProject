import express from 'express'
import bodyParser from 'body-parser'
import next from 'next'
import searchRoutes from './routes/search-routes'
import { getInfo, getMultiItemInfo } from './services/events'
import {
  getCartForUser,
  addReviewForUser,
  addItemToCart,
  removeItem
} from './clients/firebase'

const port = 3000
const dev = true
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.urlencoded({ extended: false }))
  server.use(bodyParser.json({ type: 'application/json' }))
  server.use(searchRoutes)

  server.get('/', (req, res) => {
    app.render(req, res, '/home')
  })

  server.get('/about', (req, res) => {
    app.render(req, res, '/about')
  })

  server.get('/cart', (req, res) => {
    getCartForUser()
      .then(items => {
        app.render(req, res, '/cart', { items })
      })
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

  server.post('/review', (req, res) => {
    const reviewObj = req.body
    addReviewForUser('user1', reviewObj)
      .then(_ => {
        res.sendStatus(200)
      })
  })

  server.post('/add-item', (req, res) => {
    const itemObj = req.body
    addItemToCart(itemObj, 'user1')
      .then(_ => {
        res.sendStatus(200)
      })
  })

  server.delete('/delete-item', (req, res) => {
    const itemId = req.query.itemId
    removeItem(itemId)
    .then(_ => {
      res.sendStatus(200)
    })
  })

  server.get('*', (req, res) => {
    handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`Ready on http://localhost:${port}`)
  })
})