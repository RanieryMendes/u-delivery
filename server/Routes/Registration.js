const express = require('express')
const Router = express.Router()
const RegClient = require('../Controllers/registrationClient')
const RegCarrier = require('../Controllers/registrationCarrier')
const GetOrder = require('../Controllers/getOrder')
const removeCarrier = require('../Controllers/removeCarrier')




Router.post("/register/Client", express.json(), RegClient)
Router.post("/register/Carrier", express.json(), RegCarrier)
Router.get("/order/:id", express.json(), GetOrder)
Router.delete("/carrier/:studentID", express.json(), removeCarrier)

module.exports = Router