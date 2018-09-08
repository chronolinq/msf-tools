const express = require('express');
const path = require('path');
const app = express();
var PORT = process.env.PORT || '3000';


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile('/public/index.html');
});

app.listen(PORT, function () {
    console.log('React app listening on port ' + PORT + '!')
});