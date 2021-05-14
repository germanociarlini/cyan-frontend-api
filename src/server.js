const express = require('express');
const port = 3001;
const app = express();
const routes = require('./routes');

app.use(express.json());

app.use(routes);

app.listen(port, () => {
    console.log(`Running server on port ${port}`);
});