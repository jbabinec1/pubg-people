const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || port

app.get('/api', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || port, function(){
    console.log('Your node js server is running');
});