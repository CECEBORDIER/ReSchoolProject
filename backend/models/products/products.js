const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ProductSchema = new Schema({
productId: String,
title: String,
description: String,
numberUserFavorits: Number,
});





module.exports = mongoose.model('ProductModel', ProductSchema)


