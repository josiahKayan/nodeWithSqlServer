var express = require('express');
var bodyParser = require('body-parser');
// const auth = require('./middlewares/auth');
const jwt = require('jsonwebtoken');
const productRoute = require('./routes/product-route');

var app = express();

//Body Parser Middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}));

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

//Setting up server
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

// const createUserToken = ( userId ) =>{
//     return jwt.sign({"userId":userId},config.SALT_KEY,{expiresIn: '1d'});
// }

app.use('/products',productRoute);




