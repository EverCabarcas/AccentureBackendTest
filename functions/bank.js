var customerModel = require('../models/customer');

exports.createCustomer = function (req, res, next) {
    customerModel.findOne({id:req.body.id}, function (err, customer) {
        if(err){
            return res.status(400).json({
                mensaje: 'Error en la operacion '+err
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
                mensaje: 'Cliente creado con exito'
            });
        }
    });
};

exports.validateId = function (req, res, next) {
    customerModel.findOne({id:req.body.id}, function (err, customer) {
        if(err){
            return res.status(400).json({
                mensaje: 'Error en la operacion '+err
            });
        }
        if(customer){
            return res.status(500).json({
                mensaje: 'El número de identificación proporcionado ya se encuentra almacenado'
            });
        }else{
            return res.status(200).json({
                mensaje: 'No se encuentra almacenado'
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
          mensaje: 'El cliente debe tener mas de 18 años'
      });
  }else{
      return res.status(200).json({
          mensaje: 'Valor permitido'
      });
  }

};

exports.validateEntryDate = function(req, res, next){
    var date = new Date();
    var datehiring = new Date(req.body.hiring);
    if(datehiring.getTime() < date.getTime()){
        return res.status(200).json({
            mensaje: 'la fecha de ingreso a la empresa debe ser menor al dia de hoy'
        });
    }else{
        return res.status(500).json({
            mensaje: 'La fecha ingresada debe ser inferior al día de hoy'
        });
    }
};

exports.loan = function (req, res, next) {
    var date = new Date();
    var datehiring = new Date(req.body.hiring);
    var months = ((date.getFullYear()*12) + (date.getMonth()+1)) + ((datehiring.getFullYear()*12) + (datehiring.getMonth()+1));

    if(months > 18 && req.body.salary > 800000){
        if(req.body.salary > 800000 && req.body.salary <= 1000000){
            return res.status(200).json({
                mensaje: 'Se le a aprobado un valor por $5.000.000'
            });
        }
        if(req.body.salary > 1000000 && req.body.salary <= 4000000){
            return res.status(200).json({
                mensaje: 'Se le a aprobado un valor por $20.000.000'
            });
        }
        if(req.body.salary > 4000000){
            return res.status(200).json({
                mensaje: 'Se le a aprobado un valor por $50.000.000'
            });
        }
    }else{
        return res.status(500).json({
            mensaje: 'No cumple con los criterios para tener aprobado un credito'
        });
    }

};
