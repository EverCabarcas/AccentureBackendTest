var express = require('express');
var router = express.Router();
var bankFuntions = require('../functions/bank');

/* GET users listing. */
router.post('/createCustomer', function(req, res, next) {
    bankFuntions.createCustomer(req, res, next)
});

router.get('/validateId', function(req, res, next) {
    bankFuntions.validateId(req, res, next)
});

router.get('/validatebirthdate', function(req, res, next) {
    bankFuntions.validatebirthdate(req, res, next)
});

router.get('/validateEntryDate', function(req, res, next) {
    bankFuntions.validateEntryDate(req, res, next)
});

router.get('/loan', function(req, res, next) {
    bankFuntions.loan(req, res, next)
});

module.exports = router;
