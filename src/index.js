const express = require("express");
const route = require("./routes/ProductsRoutes");
const cors = require("cors");
const app = express();
<<<<<<< HEAD
=======

>>>>>>> 1b2d5bee36d079b8cad42ed07cc5f37858fb5493
app.use(cors());
app.use(express.json());

app.use(route);

<<<<<<< HEAD
app.listen(5000);
=======
app.listen('5000');
>>>>>>> 1b2d5bee36d079b8cad42ed07cc5f37858fb5493
