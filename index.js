const express = require('express');
const app = express();

const hello = require('./routes/hello');

app.use(express.json());


// adding routes
app.use('/hello', hello);

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));