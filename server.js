const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/auth_router");
const { connectDatabase } = require("./Config/db_config");
require("dotenv").config();

const app = express();

//Connecting to MongoDB
connectDatabase();

//Port
const port = process.env.PORT || "3000";

//Middleware
app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server Started and running on port ${port}`);
});
