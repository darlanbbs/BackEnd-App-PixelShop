const express = require("express");
const route = require("./routes/ProductsRoutes");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use(route);

app.listen('postgres://rcssrxkl:k6AnqcZGq8T1P4lZ1_r-wqQ7NLRF8x6b@tuffi.db.elephantsql.com/rcssrxkl');
