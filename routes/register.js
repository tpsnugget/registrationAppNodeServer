const express = require('express'),
  router = express.Router(),
  userModel = require('../models/userModel'),
  helperFunctions = require('../utils/utils.js'),
  validation = require('../middleware/validationMiddleware'),
  userSchema = require('../validation/userValidation')

/* Route is /register */
router.post('/', validation(userSchema), async (req, res) => {
  try {
    const { address1, address2, city, country, firstName, lastName, usState, zip } = req.body
    const errorObj = {}

    if (!helperFunctions.isAlphaNum(address1)){errorObj['address1'] = 'address1 failed server validation, was not alphanumeric'}
    if (!helperFunctions.isString(city)){errorObj['city'] = 'city failed server validation, string was not a - z or A - Z'}
    if (!helperFunctions.isString(country)){errorObj['country'] = 'country failed server validation, string was not a - z or A - Z'}
    if (country !== 'US') {errorObj['countryNotUS'] = 'country failed server validation, was not US'}
    if (!helperFunctions.isString(firstName)){errorObj['firstName'] = 'firstName failed server validation, string was not a - z or A - Z'}
    if (!helperFunctions.isString(lastName)){errorObj['lastName'] = 'lastName failed server validation, string was not a - z or A - Z'}
    if (!helperFunctions.isState(usState)){errorObj['usState'] = 'usState failed server validation, not a valid US state abbreviation'}
    if (!helperFunctions.isZip(zip)){errorObj['zip'] = 'zip failed server validation, string was not a proper zip code'}

    if (Object.keys(errorObj).length === 0) {
      const newUser = new userModel
      newUser.address1 = address1
      newUser.address2 = address2
      newUser.city = city
      newUser.country = country
      newUser.firstName = firstName
      newUser.lastName = lastName
      newUser.state = usState
      newUser.zip = zip
      
      const addNewUser = await newUser.save()

      res.status(200).json({"msg": "Success", "newUser": addNewUser, "ErrorObject": errorObj})
    } else {
      res.status(400).json({"msg": "Server validation error", "ErrorObject": errorObj})
    }
  } catch (error) {
      res.status(400).json({"msg": "Error", "err": error})
  }
})

module.exports = router