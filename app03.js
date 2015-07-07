// Inclusión de express
var express  = require('express');

// Definición de la variable de la trayectoria del directorio de trabajo
var path = require('path');

// Definición de la cerradura
var app = express();

// Uso del middleware de páginas web estáticas
app.use(express.static( path.join(__dirname, 'public') ) );

// Establecer el puerto del servicio
app.listen(8000);