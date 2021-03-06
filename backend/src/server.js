const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();


mongoose.connect('mongodb+srv://omnistack:omnistack@semana09-usmra.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//informar ao express q iremos usar json
app.use(express.json());
app.use(routes);

app.listen(3333);