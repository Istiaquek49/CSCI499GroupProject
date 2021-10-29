import express from 'express'
import { search } from '../services/events'

const router = express.Router()

router.get('/search', (req, res) => {
  const { searchTerm } = req.query
  if (searchTerm) {
    search(searchTerm)
    .then(searchResults=> {
      res.send(searchResults)
    })
  } else {
    res.send('404')
  }
})

export default router