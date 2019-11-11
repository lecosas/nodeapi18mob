const jwt = require('jsonwebtoken');
const { secret } = require('../config/default'); //Pega apenas 1 objeto (propriedade)

module.exports = (data, expiresIn = 720) => 
    jwt.sign(
        data,
        secret, 
        { expiresIn } //Em segundos = 720 minutos = 12h.
    ); //auto return