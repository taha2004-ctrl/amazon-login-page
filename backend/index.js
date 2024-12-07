const express = require("express")
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const accountRouter = require("./routes/api/account.js");

const port = process.env.PORT;
const uri = process.env.URI;
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(uri, {
    dbName: "CyberSecurity",
  })
  .then(() => console.log("connected to database"))
  .catch((err) => console.log("err", err));

app.use("/api/account", accountRouter);

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
