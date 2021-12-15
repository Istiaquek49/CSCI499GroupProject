import admin from 'firebase-admin'

const serviceAccount = require('../firebase-token.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}

const db = admin.firestore();

export const addItemToCart = (id, userId) => {
  return db.collection('cart').set({
    itemId: id,
    date_added: new Date().valueOf(),
    user: userId
  })
    .then(res => res.id)
}

export const getCartForUser = async (uid) => {
  const cartRef = db.collection('cart')
  const snapshot = await cartRef.where('user', '==', 'user1').get()

  if (snapshot.empty) {
    console.log("Cart is empty")
    return []
  }

  return snapshot.map(doc => ({ id: doc.id, ...doc.data }))
}

export const addReviewForUser = async (userId, reviewData) => {
  const reviewRef = db.collection('reviews')
  const reviewObj = {
    userId,
    ...reviewData
  }

  return reviewRef.add(reviewObj)
}

export const getReviewsForUser = async (userId) => {

}

export const getAllReviewsForEvent = async (eventId) => {
  const reviewRef = db.collection('reviews')
  const snapshot = await reviewRef.where('eventId', '==', eventId).get()

  if (snapshot.empty) {
    console.log("No reviews")
    return []
  }

  const result = []
  snapshot.forEach(doc => {
    result.push({
      id: doc.id,
      ...doc.data()
    })
  })

  return result
}