const process = require("process");
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require("method-override");
require('dotenv').config();

const PORT = process.env.PORT || 3005;
// Template engine
app.set("view engine", "ejs");
/* app.set("view engine", "html"); */ /* por ahora */
app.set("views", "./src/Views");

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: false}));

// Routers 
const indexRouter = require("./Routes");

//Routes Middlewares
app.use("/", indexRouter);


// Open PORT
app.listen(PORT, () => console.log(`Server listen in port: ${PORT}\nhttp://localhost:${PORT}`));