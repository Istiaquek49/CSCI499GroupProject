require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET);

const customer = await stripe.customers.create({
    description: 'My First Test Customer',
});