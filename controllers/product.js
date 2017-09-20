const _ = require('lodash')
const Product = require('../models/product.js')

const product = app => {
	let _products = []

	//create
	app.post('/api/products', (req, res) => {

		//console.log(req)
		//_products.push(req.body)
		//res.json({'info': 'product created'})
		const newProduct = new Product(req.body)
		newProduct.save().then(()=> {
			res.json({'info':'product created'})
		}).catch(err => {
			console.error(err)
		})
	})	

	//read
	app.get('/api/products', (req, res)=>{
		//res.json({'info': 'ini products'})
		Product.find().then(products =>{
			res.json(products)
		}).catch(err=>{
			console.error(err)
		})
	})

	//update
	app.put('/api/products/:id', (req,res)=>{
		/*const index = _.findIndex(_products, {
			id: pareInt(req.params.id)
		})
		_.merge(_products[index], req.body)
		console.log(index)
		_products[index] = req.body*/
		//res.json({'info':'update'})
		Product.update({ _id: req.params.id}, req.body)
		.then(products =>{
			res.json({info: 'product updated'})
		}).cathc(err=>{
			console.error(err)
		})
	})

	//delete
	app.delete('/api/products/:id', (req,res)=>{
		/*_.remove(_products, product => {
			return product.id === pareInt(req.params.id)
		})
		res.json({'info':'product removed'})*/
		
		Product.remove({ _id: req.params.id}).then(()=> {
			res.json({'info': 'Product removed'})
		}).catch(err=>{
			console.error(err)
		})
		
	})
	
}


module.exports = product