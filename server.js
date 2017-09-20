const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://admin:admin@ds141524.mlab.com:41524/hecktivcash-api',{
	useMongoClient: true
})
mongoose.Promise = global.Promise;
app.use(bodyParser.json())
const product = require('./controllers/product.js')(app)

app.get('/', (request, response) => {
	response.send('OK')
})


app.listen(3000, () =>{
	console.log('Server is listening ...')
})
