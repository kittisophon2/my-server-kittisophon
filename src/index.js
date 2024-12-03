const express = require("express");
const app = express();

require('dotenv').config({path: './config.env'});
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoute = require('./routes/product.route');
const customersRoute = require('./routes/customer.route');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/",(req,res) =>{
    res.send("Sawasdeekub");
});

app.use("/products", productRoute);
app.use("/customers",customersRoute);

app.listen(port, () => {
  console.log("App started at port: " + port);
});