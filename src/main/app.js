// requires
const express = require('express')
const _ = require('lodash')
const config_values = require('./../config/config.json')

//requires methods
const calcularSueldoBrutoClass = require('./../methods/calcular_sueldo_bruto.js')
const calcularSueldoNetoClass = require('./../methods/calcular_sueldo_neto.js')

// initializate express component
const app = express()

// set express settings
app.use(express.json())
app.set('json spaces', 4)

// methods
app.post(config_values.paths.main_path + config_values.paths.calcularSueldoNeto, (req, res) => {
    console.log('Calculando Sueldo Neto: ' + req.url)
    try {
        let result = calcularSueldoNetoClass(req)
        res.status(result.code).json(result.body)
    } catch (err) {
        res.status(err.status).json(err)
    }
})

app.post(config_values.paths.main_path + config_values.paths.calcularSueldoBruto, (req, res) => {
    console.log('Calculando Sueldo Bruto: ' + req.url)
    try {
        let result = calcularSueldoBrutoClass(req)
        res.status(result.code).json(result.body)
    } catch (err) {
        res.status(err.status).json(err)
    }
})

// starts the service

const puerto = 8080
app.listen(puerto, () => {
    console.log(`Servidor inicializado en puerto ${puerto}`)
})
