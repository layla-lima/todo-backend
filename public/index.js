require("dotenv").config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require("path");

// CORS 
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PATCH, DELETE');
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json());

// MongoDB 
mongoose.connect(process.env.MONGO_URI);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', (error) => {
    console.log("Erro MongoDB:", error);
});

db.once('connected', () => {
    console.log('Database Connected');
});

//  Rotas
const routes = require('./routes/routes');
app.use('/api', routes);

//  Servir frontend (Angular build)
app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

//  Servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
});