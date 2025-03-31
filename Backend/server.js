const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./Config/connectDb");
//rest object
const app = express();

dotenv.config();

connectDb();
//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("<h1>Hello from server</h1>");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
