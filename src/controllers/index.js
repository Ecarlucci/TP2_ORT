const appServices = require('../services')
const reqValidations = require('../utils')

const { calcularSueldoNeto, calcularSueldoBruto, calcularSAC, calcularVacaciones } = appServices
const { calculoSueldoRequestValidation, calculoSacVacRequestValidation } = reqValidations

// methods
const postCalculoSueldoNeto = async (req, res, next) => {
    console.log('Calculando Sueldo Neto: ' + req.url)
    try {
        //request validation
        await calculoSueldoRequestValidation(req.body)
        //destructuring request
        const { sueldo, aporteSindicato, casado, hijos, alquilerMensual, jubilado, patagonico } = req.body
        let result = await calcularSueldoNeto(sueldo, aporteSindicato, casado, hijos, alquilerMensual, jubilado, patagonico)
        res.status(result.status).json(result)
    } catch (err) {
        console.log(err)
        res.status(err.status).json(err)
    }
}

const postCalculoSueldoBruto = async (req, res, next) => {
    console.log('Calculando Sueldo Bruto: ' + req.url)
    try {
        //request validation
        await calculoSueldoRequestValidation(req.body)
        //destructuring request
        const { sueldo, aporteSindicato, casado, hijos, alquilerMensual, jubilado, patagonico } = req.body
        let result = await calcularSueldoBruto(sueldo, aporteSindicato, casado, hijos, alquilerMensual, jubilado, patagonico)
        res.status(result.status).json(result)
    } catch (err) {
        console.log(err)
        res.status(err.status).json(err)
    }
}

const postCalculoAguinaldo = async (req, res, next) => {
    console.log('Calculando Aguinaldo: ' + req.url)
    try {
        //request validation
        await calculoSacVacRequestValidation(req.body)
        //destructuring request
        const { sueldo } = req.body
        let result = await calcularSAC(sueldo)
        res.status(result.status).json(result)
    } catch (err) {
        console.log(err)
        res.status(err.status).json(err)
    }
}

const postCalculoVacaciones = async (req, res, next) => {
    console.log('Calculando Vacaciones: ' + req.url)
    try {
        //request validation
        await calculoSacVacRequestValidation(req.body)
        //destructuring request
        const { sueldo } = req.body
        let result = await calcularVacaciones(sueldo)
        res.status(result.status).json(result)
    } catch (err) {
        console.log(err)
        res.status(err.status).json(err)
    }
}


module.exports = {
    postCalculoSueldoNeto,
    postCalculoSueldoBruto,
    postCalculoAguinaldo,
    postCalculoVacaciones
}