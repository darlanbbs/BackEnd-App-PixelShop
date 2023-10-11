const express = require("express");
const route = require("./routes/ProductsRoutes");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use(route);


app.listen('5000');

