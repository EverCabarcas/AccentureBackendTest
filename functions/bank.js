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

exports.loan = function (req, res, next) {

};