const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');


const routes = express.Router();
const upload = multer(uploadConfig);
//GET, POST, PUT, DELETE
//req.query = acessar query paramms (para filtros)
//req.params = acessar route params (para edição, delete)
//req.body = Acessar corpo da requisição (para criação, edição)

//routes.get('/users',(req, res)=>{
//    return res.json({idade: req.query.idade});
//});

//routes.put('/users/:id',(req,res)=>{
//    return res.json({id: req.params.id});
//});

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;