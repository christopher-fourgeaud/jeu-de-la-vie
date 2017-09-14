const express = require('express')
const app = express()

var reponse =  function (req, res) {
    res.send('Hello World!')
};

app.get('/', reponse)

app.listen(3000)