var customerModel = require('/models/customer');

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
            return res.status(200).json({
                mensaje: 'El número de identificación proporcionado ya se encuentra almacenado'
            });
        }
    });
};

exports.validatebirthdate = function(req, res, next){
  var date = new Date();
  var birthday = Math.abs(date.getTime() - req.body.date.getTime())/(1000*60*60*24*360.25);

  if(birthday <= 18){
      return res.status(200).json({
          mensaje: 'El cliente debe tener mas de 18 años'
      });
  }

};

exports.validateEntryDate = function(req, res, next){
    var date = new Date();
    if(req.body.hiring.getTime() < date.getTime()){
        return res.status(200).json({
            mensaje: 'la fecha de ingreso a la empresa debe ser menor al dia de hoy'
        });
    }
};

exports.loan = function (req, res, next) {

};
