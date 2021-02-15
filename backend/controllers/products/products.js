var ProductModel = require('../../models/products/products')



exports.createProduct = function (req, res, next) {
    const product = new ProductModel({
        productId: req.body.productId,
        title: req.body.title,
        description: req.body.description,
        numberUserFavorits: req.body.numberUserFavorits
    });
    console.log(product)
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
    )
}

exports.getOneProduct = function (req, res, next) {
    ProductModel.findOne({
        _id: req.params.param
    }).then(
        (product) => {
            res.status(200).json(product);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.getAllProduct = function (req, res, next) {
    ProductModel.find().then(
        (products) => {
            res.status(200).json(products);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.deleteOneProduct = (req, res, next) => {
    ProductModel.deleteOne({ _id: req.params.id }).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}


exports.updateOneProduct = (req, res, next) => {
    const product = new ProductModel({
        _id: req.params.param,
        title: req.body.title,
        description: req.body.description,
    });
    console.log(product)
    ProductModel.updateOne({ _id: req.params.param }, product).then(
        () => {
            res.status(201).json({
                message: 'Thing updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.deleteAllProducts = (req, res, next) => {
    ProductModel.deleteMany({}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  }