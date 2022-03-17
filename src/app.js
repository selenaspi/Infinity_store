const express = require('express');
const path = require ('path');
const PORT = process.env.PORT || 3000;
const app = express(); 

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));
app.listen( PORT, () => console.log("Servidor corriendo en el puerto " + PORT));

app.get("/productCart", (req, res) => {res.sendFile(path.join(__dirname, "views", "productCart.html"))});
app.get("/login", (req, res) => {res.sendFile(path.join(__dirname, "views", "login.html"))})
app.get("/register", (req, res) => {res.sendFile(path.join(__dirname, "views", "register.html"))})
app.get("/productDetails", (req, res) => {res.sendFile(path.join(__dirname, "views", "productDetails.html"))})
app.get("/", (req, res) => {res.sendFile(path.join(__dirname, "views", "index.html"))})