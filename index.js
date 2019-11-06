const express = require('express');

const app = express();

app.get('/products', (req, res, next) => {
    res.json({
        id: 123,
        nome: 'Leandro'
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
