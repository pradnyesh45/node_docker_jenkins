const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000;
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", require("./routes/index"));

// express server
app.listen(port, () => {
  console.log(`Server of training institute listening at port: ${port}`);
});
