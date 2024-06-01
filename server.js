const express = require('express');
const app = express();
const routes = require('./routes/routes');
const dotenv = require('dotenv');
const cors = require('cors');

//Configura DotEnv
dotenv.config();
const corsOptions = {
    origin: 'http://www.cashfly.com:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
};
  app.use(cors(corsOptions));
  
// Middleware para parsear JSON
app.use(express.json());

// Rutas generales
app.use('/', routes);

// Puerto en el que escucha el servidor
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://www.cashfly-client-apu.com:${PORT}/`);
});