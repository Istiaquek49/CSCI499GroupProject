import { Events } from '../clients/algolia'

const events = new Events()

export const search = (term) => {
  return events.search(term)
  .then(results => {
    return results.hits
  })
}