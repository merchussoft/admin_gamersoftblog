const route = require('express').Router();

route.get('/', (req, res) => {
    res.json({'message': 'hola estamos desde el admin de blog'})
})




module.exports = route;