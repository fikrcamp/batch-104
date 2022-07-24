const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoute = require("./Routes/userRoutes");
const restaurantRoutes = require("./Routes/restaurantRoutes");
const menuRoutes = require("./Routes/menuRoutes");

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config({ path: "./.env" });
require("./server");

app.use("/user", userRoute);
app.use("/restaurant", restaurantRoutes);
app.use("/menu", menuRoutes);

let port = 8000;

app.listen(port, () => {
  console.log("Listening on port 8000");
});
