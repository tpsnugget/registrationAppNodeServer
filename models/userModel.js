const mongoose = require('mongoose')

/* Define the User Schema */
const userSchema = new mongoose.Schema({
    address1: {
      type: String,
      required: true,
    },
    address2: {
      type: String,
    },
    city: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true,
      default: 'US'
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zip: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
})

module.exports = mongoose.model('user', userSchema)