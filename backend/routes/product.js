var express = require('express');
var router = express.Router();
var ProductModel = require('../models/products')
var productCtrl = require('../controllers/products');
// const auth = require('../middleware/auth')



router.post('/product/create',  productCtrl.createProduct);

router.put('/products/:param/',  productCtrl.updateOneProduct);

router.delete('/delteAll',  productCtrl.deleteAllProducts);


router.delete('/delteProduct/:id', productCtrl.deleteOneProduct);

router.get('/product/:param/', productCtrl.getOneProduct)

router.get('/products', productCtrl.getAllProduct)






module.exports = router;
