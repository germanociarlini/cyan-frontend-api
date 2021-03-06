const express = require("express");
const routes = require("./routes");
const cors = require("cors");

require("./database");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(port, () => {
  console.log(`Running server on port ${port}`);
});
