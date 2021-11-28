import { initializeApp, applicationDefault, cert } from 'firebase-admin/app'
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore'

const serviceAccount = require('../csci499project-62541ce998df.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

export const addItemToCart = (id) => {
  return db.collection('cart').set({
    itemId: id,
    date_added: new Date().valueOf(),
    user: 'user1'
  })
    .then(res => res.id)
}

export const getCartForUser = (uid) => {
  return db.collection('cart').where('user' === 'user1')
}