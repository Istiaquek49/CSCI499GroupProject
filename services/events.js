import { Events } from '../clients/algolia'

const events = new Events()

export const search = (term) => {
  return events.search(term)
    .then(results => {
      return results.hits
    })
}

export const getInfo = (objectID) => {
  return events.getItemInfo(objectID)
    .then(result => result)
}

export const getMultiItemInfo = (objectIds) => {
  return events.getMultiItemInfo(objectIds)
    .then(results => results)
}