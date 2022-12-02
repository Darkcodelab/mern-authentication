// env variables
require("dotenv").config();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const express = require("express");
const app = express();
const cors = require("cors");

const connectDB = require("./config/db");
connectDB(MONGO_URI);
const errorHandler = require("./middlewares/errorHandler");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use("/auth", require("./routes/auth"));

// error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on *:${PORT}`));
