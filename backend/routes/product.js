var express = require('express');
var router = express.Router();
var ProductModel = require('../models/products')
var productCtrl = require('../controllers/products');
const auth = require('../middleware/auth')



router.post('/product/create', auth, productCtrl.createProduct);

router.put('/products/:param/', auth, productCtrl.updateOneProduct);

router.delete('/delteAll', auth, productCtrl.deleteAllProducts);


router.delete('/delteProduct/:id',auth, productCtrl.deleteOneProduct);

router.get('/product/:param/',auth, productCtrl.getOneProduct)

router.get('/products',auth, productCtrl.getAllProduct)






module.exports = router;
