var { connect, connection } = require('mongoose');
var { config } = require('dotenv'); 

/*const {___} = require(<package>) is called Destructuring. 
This makes our code a lot more cleaner.
*/

/*We'll use module.exports since we want to import this file in our server.js*/

module.exports = () => {
 config(); //invoking the dotenv config here
 var mongoDB = process.env.DB_URI 

 connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log('Connection estabislished with MongoDB');
            
        })
        .catch(error => console.error(error.message, 'Unable to connect to MongoDB Atlas'));
}

