const express = require('express');
const moongose = require('mongoose');

const app = express();
moongose.connect('mongodb://localhost:27017/crud');


app.listen(3001, () => {
    console.log('Server is running');
});
