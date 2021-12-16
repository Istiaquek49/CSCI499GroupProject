import admin from 'firebase-admin'

const serviceAccount = require('../firebase-token.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}

const db = admin.firestore();

export const addItemToCart = (itemInfo, userId) => {
  return db.collection('cart').add({
    date_added: new Date().valueOf(),
    user: userId,
    ...itemInfo
  })
}

export const getCartForUser = async (uid) => {
  const cartRef = db.collection('cart')
  const snapshot = await cartRef.where('user', '==', 'user1').get()

  if (snapshot.empty) {
    console.log("Cart is empty")
    return []
  }

  const result = []
  snapshot.forEach(doc => {
    result.push({
      id: doc.id,
      ...doc.data()
    })
  })

  return result.sort((a, b) => a.date_added - b.date_added)
}

export const addReviewForUser = async (userId, reviewData) => {
  const reviewRef = db.collection('reviews')
  const reviewObj = {
    userId,
    date_created: new Date().valueOf(),
    ...reviewData
  }

  return reviewRef.add(reviewObj)
}

export const getAllReviewsForEvent = async (eventId) => {
  const reviewRef = db.collection('reviews')
  const snapshot = await reviewRef.where('objectID', '==', eventId).get()

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

  return result.sort((a, b) => b.date_created - a.date_created)
}