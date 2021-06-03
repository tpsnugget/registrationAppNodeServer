const yup = require('yup')

const userSchema = yup.object({
  address1: yup.string().matches(/[A-Za-z0-9]/).required(),
  city: yup.string().required(),
  country: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  usState: yup.string().required(),
  zip: yup.string().min(5).max(10).required()
})

module.exports = userSchema