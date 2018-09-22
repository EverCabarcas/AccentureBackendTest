var express = require('express');
var router = express.Router();
var bankFuntions = require('../functions/bank');

/* GET users listing. */
router.post('/createCustomer', function(req, res, next) {
    bankFuntions.createCustomer(req, res, next)
});

router.post('/validateId', function(req, res, next) {
    bankFuntions.validateId(req, res, next)
});

router.post('/validatebirthdate', function(req, res, next) {
    bankFuntions.validatebirthdate(req, res, next)
});

router.post('/validateEntryDate', function(req, res, next) {
    bankFuntions.validateEntryDate(req, res, next)
});

router.post('/loan', function(req, res, next) {
    bankFuntions.loan(req, res, next)
});

module.exports = router;
