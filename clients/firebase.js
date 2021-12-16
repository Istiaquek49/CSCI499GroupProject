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
      doc_id: doc.id,
      ...doc.data()
    })
  })

  return result.sort((a, b) => a.date_added - b.date_added)
}

export const removeItem = (itemId) => {
  const cartRef = db.collection('cart')

  return cartRef.doc(itemId).delete()
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

export const addReceipt = async (uid) => {
  const receiptsRef = db.collection('receipts')
  const cartRef = db.collection('cart')

  //Get cart
  const snapshot = await cartRef.where('user', '==', 'user1').get()

  let total = 0, itemsCount = 0, items = []
  snapshot.forEach(doc => {
    let data = doc.data()
    total += data.price
    itemsCount++
    items.push(doc.id)
  })

  await  receiptsRef.add({
    date_created: new Date().valueOf(),
    price: total,
    total_item_count: itemsCount,
    user: 'user1'
  })

  const promises = items.map(id => removeItem(id))
  return Promise.all(promises)
}

export const viewAllReceipts = async (uid) => {
  const receiptRef = db.collection('receipts')

  const snapshot = await receiptRef.where('user', '==', 'user1').get()

  const results = []
  snapshot.forEach(doc => {
    results.push({
      doc_id: doc.id,
      ...doc.data()
    })
  })

  return results.sort((a, b) => b.date_created - a.date_created)
}

export const getReceiptInfo = async id => {
  const receiptRef = db.collection('receipts')

  const snapshot = await receiptRef.doc(id).get()
  return snapshot.data()
}