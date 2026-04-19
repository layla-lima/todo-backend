require('dotenv').config();

const express = require('express');
const app = express();

// CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PATCH, DELETE');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Rotas
const routes = require('./routes/routes');
app.use('/api', routes);

// MongoDB
const mongoose = require('mongoose');


var mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', (error) => {
    console.log("Erro MongoDB:", error)
});

db.once('connected', () => {
    console.log('Database Connected');
});

// Servidor
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
});