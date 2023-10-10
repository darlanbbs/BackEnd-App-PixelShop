const express = require("express");
const route = require("./routes/ProductsRoutes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(route);

app.listen(3000);
