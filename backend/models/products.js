const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ProductSchema = new Schema({
title: String,
description: String,
});





module.exports = mongoose.model('ProductModel', ProductSchema)


