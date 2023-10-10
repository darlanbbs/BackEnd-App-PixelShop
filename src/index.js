const express = require("express");
const cors = require("cors");
const { route } = require("./routes/ProductsRoutes");

const app = express();
app.use(route);

app.use(express.json());
app.use(cors());
app.listen(3000);
