const mongoose = require('mongoose')

const productScema = mongoose.Schema({
	title: String,
	description: String,
	image_url: String,
	price: String,
	stock: Number,
})

module.exports = mongoose.model('Product', productScema)