const express = require("express");
const cors = require("cors");
const router = require("./src/routes/index");

const app = express();

app.use(express.json());
app.use(cors());

const port = 5003;

app.use("/api/v1/", router);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
