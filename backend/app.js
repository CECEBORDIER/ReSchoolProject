var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var ProductModel = require('./models/products')
// view engine setup
var express = require('express');
var app = express()

// Body Pareser
app.use(bodyParser.urlencoded({ extended: true }));

// CORS configuration
var corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}
app.use(cors())


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


app.post('/Product/Create', function (req, res, next) {
  const product = new ProductModel({
    title: req.body.title,
    description: req.body.description,
  });
  product.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
      
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});


app.get('/products', cors(corsOptions), function (req, res, next) {
  const stuff = [
    {
      _id: 'oeihfzeoi',
      title: 'My first thing',
      description: 'All frvrgdsdgdfthdfthdfgjnhdfghdthdfghdghdhj',
      imageUrl: '',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeoi',
      title: 'My first thing',
      description: 'All frvrgdsdgdfthdfthdfgjnhdfghdthdfghdghdhj',
      imageUrl: '',
      price: 4900,
      userId: 'qsomihvqios',
    },
  ];
  console.log(res)
  res.status(200).json(stuff);
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
