const express = require("express");
const route = require("./routes/ProductsRoutes");

const app = express();

app.use(express.json());
app.use(route);

app.listen(3000);
