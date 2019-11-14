// require
const express = require('express')
const config_values = require('./config/config.json')
const routes = require('./routes')
const bodyParser = require('body-parser')

// initializate express component
const app = express()

// set express settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// status method
app.get('/', (req, res) => res.status(200).json({ status: 'OK' }))

//set routes
app.use(config_values.paths.main_path, routes);

// starts the service
const puerto = 8080
app.listen(puerto, () => {
    console.log(`Salary App Running on Port: ${puerto}`)
})

module.exports = {
    app
}