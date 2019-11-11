const express = require('express');

const app = express();

const routes = require('./routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
