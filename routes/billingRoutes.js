const keys = require('../config/keys')
const stripe = require('stripe')

module.exports = (app) => {
  app.post('/api/stripe', (req, res) => {
    stripe.charges.creates({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id,
    })
  })
}
