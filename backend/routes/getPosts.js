
var express = require('express');
var router = express.Router();



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

  module.exports = router