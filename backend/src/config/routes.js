const express = require('express')

module.exports = function(server) {

  // URL base
  const router = express.Router()
  server.use('/api', router)

  // Rotas
  const BillingCycle = require('../api/billingCycle/billingCyclesService')
  BillingCycle.register(router, '/billingCycles')
}