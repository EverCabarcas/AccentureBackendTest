var customerModel = require('../models/customer');

exports.createCustomer = function (req, res, next) {
    customerModel.findOne({id:req.body.id}, function (err, customer) {
        if(err){
            return res.status(400).json({
                mensaje: 'An error has occurred '+err
            });
        }
        if(!customer){
            var newCustomer = new customerModel({
                id: req.body.id,
                name: req.body.name,
                lastName: req.body.lastName,
                birthdate: req.body.birthdate
            });

            newCustomer.save();

            res.status(200).json({
                mensaje: 'Customer registered successfully.'
            });
        }
    });
};

exports.validateId = function (req, res, next) {
    customerModel.findOne({id:req.body.id}, function (err, customer) {
        if(err){
            return res.status(400).json({
                mensaje: 'An error has occurred '+err
            });
        }
        if(customer){
            return res.status(500).json({
                mensaje: 'This ID card number already exists.'
            });
        }else{
            return res.status(200).json({
                mensaje: 'Ok.'
            });
        }
    });
};

exports.validatebirthdate = function(req, res, next){
  var date = new Date();
  var datebirthday = new Date(req.body.date);
  var birthday = Math.abs(date.getTime() - datebirthday.getTime())/(1000*60*60*24*360.25);

  if(birthday <= 18){
      return res.status(500).json({
          mensaje: 'The customer must be of legal age (+18).'
      });
  }else{
      return res.status(200).json({
          mensaje: 'Ok.'
      });
  }

};

exports.validateEntryDate = function(req, res, next){
    var date = new Date();
    var datehiring = new Date(req.body.hiring);
    if(datehiring.getTime() < date.getTime()){
        return res.status(200).json({
            mensaje: 'Ok.'
        });
    }else{
        return res.status(500).json({
            mensaje: 'The hiring date must be before the current day.'
        });
    }
};

exports.loan = function (req, res, next) {
    var date = new Date();
    var datehiring = new Date(req.body.hiring);
    var months = ((date.getFullYear()*12) + (date.getMonth()+1)) - ((datehiring.getFullYear()*12) + (datehiring.getMonth()+1));

    if(months > 18 && req.body.salary > 800000){
        if(req.body.salary > 800000 && req.body.salary <= 1000000){
            return res.status(200).json({
                mensaje: 'The credit loan has been approved for a value of $5.000.000.'
            });
        }
        if(req.body.salary > 1000000 && req.body.salary <= 4000000){
            return res.status(200).json({
                mensaje: 'The credit loan has been approved for a value of $20.000.000.'
            });
        }
        if(req.body.salary > 4000000){
            return res.status(200).json({
                mensaje: 'The credit loan has been approved for a value of $50.000.000.'
            });
        }
    }else{
        return res.status(500).json({
            mensaje: 'You don´t meet the requirements for a credit loan.'
        });
    }

};
