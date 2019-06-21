// import dependencies
const express = require('express');
const router = express.Router();

// import controller
const tenantController = require('../controllers/tenant.controller');

// api functions
// get all tenants
router.get('/', tenantController.GetAllTenants);

// get tenant by id
router.get('/:id', tenantController.GetTenantById);

// create tenant
router.post('/', tenantController.CreateTenant);

// update tenant by id
router.put('/:id', tenantController.UpdateTenantById);

// delete tenant by id
router.delete('/:id', tenantController.DeleteTenantById);

// export the router
module.exports = router;
