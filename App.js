const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoute = require("./Routes/userRoutes");
const restaurantRoutes = require("./Routes/restaurantRoutes");
const menuRoutes = require("./Routes/menuRoutes");
const orderRoutes = require("./Routes/orderRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("Images"));

dotenv.config({ path: "./.env" });
require("./server");

app.use("/user", userRoute);
app.use("/restaurant", restaurantRoutes);
app.use("/menu", menuRoutes);
app.use("/order", orderRoutes);

let port = 8000;

app.listen(port, () => {
  console.log("Listening on port 8000");
});
