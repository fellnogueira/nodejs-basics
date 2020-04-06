const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

requireDir('./src/models');

const product = mongoose.model('product');

app.get('/', (req, res) => {

    product.create({
        title: 'Reactive Native',
        description: 'Build native apps with react',
        url: 'http://github.com'
    });

    res.send('Hello Nodemon (:');
});

app.listen('3001');