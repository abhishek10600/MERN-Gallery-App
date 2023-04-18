const express = require("express");
const { config } = require("dotenv");
const homeRoutes = require("./routes/home.js");
const cors = require("cors");

config({
    path: "./private/config.env"
})

const app = express();

//middlewares
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.static("public"));

//routes
app.use("/api/Pictures/", homeRoutes);

module.exports = { app };