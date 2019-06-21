// import dependencies
let Tenant;

// create a new tenant
exports.CreateTenant = function (req, res) {
    const newTenant = new Tenant(req.body);

    newTenant.save()
        .then(tenant => {
            res.status(201).send(tenant);
        })
        .catch(err => {
            res.status(500).send(err);
        });
};

// get all tenants
exports.GetAllTenants = function (req, res) {
    Tenant.find({}, (err, tenants) => {
        if (err) {
            return res.status(500).send(err);
        }

        return res.status(200).send(tenants);
    });
};

// get tenant by id
exports.GetTenantById = function (req, res) {
    Tenant.findById(req.params.id, (err, tenant) => {
        if (err) {
            return res.status(500).send(err);
        }

        return res.status(200).send(tenant);
    });
};

// update tenant by id
exports.UpdateTenantById = function (req, res) {
    Tenant.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedTenant) => {
        if (err) {
            return res.status(500).send(err);
        }

        return res.status(200).send(updatedTenant);
    });
};

// delete tenant by id
exports.DeleteTenantById = function (req, res) {
    Tenant.findByIdAndDelete(req.params.id, (err, deletedTenant) => {
        if (err) {
            return res.status(500).send(err);
        }

        return res.status(200).send(deletedTenant);
    });
};

// putting this at the bottom is a hack so WebStorm intellisense works with Schema functions
Tenant = require('../models/tenant.model');
