import { Events } from '../clients/algolia'
import { getAllReviewsForEvent } from '../clients/firebase'

const events = new Events()

export const search = (term) => {
  return events.search(term)
    .then(results => {
      return results.hits
    })
}

export const getInfo = async (objectID) => {
  const eventInfo = await events.getItemInfo(objectID)
  const reviews = await getAllReviewsForEvent(objectID)

  return {
    ...eventInfo,
    reviews
  }
}

export const getMultiItemInfo = (objectIds) => {
  return events.getMultiItemInfo(objectIds)
    .then(results => results)
}