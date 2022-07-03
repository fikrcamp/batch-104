const express = require("express");
const dotenv = require("dotenv");

const userRoute = require("./Routes/userRoutes");
const app = express();

app.use(express.json());

dotenv.config({ path: "./.env" });
require("./server");

app.use("/user", userRoute);

let port = 8000;

app.listen(port, () => {
  console.log("Listening on port 8000");
});
