"use strict";
//Crear un servidor:
const express = require("express");
const bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');

//Middlewares:
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//Archivos de rutas:
const projectRoutes = require("./routes/project");
const userRoutes = require("./routes/user");
const emailRoutes = require("./routes/email");

app.use(cors({
  origin: "http://localhost:4200",
  credentials: true,
}));

//Rutas:
app.use("/api", projectRoutes);
app.use("/api", userRoutes);
app.use("/api", emailRoutes);

//Exportar:
module.exports = app;
