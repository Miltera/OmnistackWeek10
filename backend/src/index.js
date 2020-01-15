const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

let stringConnect = 'mongodb+srv://omni:omni@cluster0-kbcal.mongodb.net/omniweek10?retryWrites=true&w=majority';

mongoose.connect(stringConnect, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);

