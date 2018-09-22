# API REST ACCENTURE

this project expose a methods for the collection Bank para el almacenamiento de los clientes y para la posterior solicitud de creditos.
## Getting Started

For run this project you most:

* Download the code from the repo 
* Open the project in a editor or command prompt 
* Run npm install, for install all dependencies that you needed to run the project 
* Run npm start for running the project in your localhost 
    
### Prerequisites

Before you wanna run the project Run:

```
npm install
```

### Installing

For get the project you can do it:

```
Visit: https://github.com/EverCabarcas/AccentureBackendTest
```

And download or clone project


## Endpoint Created

then a explanation about the endpoints created

#### Post/createCustomer/

Create new customer

```
localhost:3000/createCustomer/
```

```
Inputs params:
 {
     "id": Number,
     "name": String,
     "lastName": String,
     "birthdate": String
 }
```

```
Return: 
{
 "mensaje": String
}
```

#### Post/validateId/

Validates that the customer ID_card number is not store
```
localhost:3000/validateId/
```

```
Inputs params:
{
     "id": Number
}
```

```
Return: 
{
 "mensaje": String
}
```

#### Post/validatebirthdate/

Validates that the customer is of legal age (+18)

```
localhost:3000/validatebirthdate/
```

```
Inputs params:
{
     "birthdate": String
}
```

```
Return: 
{
 "mensaje": String
}
```

#### Post/validateEntryDate/

Validates that the customer hiring date is less than the current day

```
localhost:3000/validateEntryDate/
```

```
Inputs params:
{
     "hiring": String
}
```

```
Return: 
{
 "mensaje": String
}
```

#### Post/loan/

Validates whether the customer meet with the requirements for a credit loan approval

```
localhost:3000/loan/
```

```
Inputs params:
{
     "hiring": String,
     "salary": String  
}
```

```
Return: 
{
 "mensaje": String
}
```




## Built With

* [MongoBD](https://www.mongodb.com/es/) - Used to create a document database
* [Mongoose](http://mongoosejs.com/) - MongoDB object modeling tool designed to work in an asynchronous environment
* [NodeJs](https://nodejs.org/en/) - JavaScript runtime built
* [Express](http://expressjs.com/) - The web framework used

## Authors

* **Ever Cabarcas** - *Initial work* - [Github](https://github.com/EverCabarcas)

## License

This project is licensed under the MIT License
