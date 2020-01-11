const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000

app.get('/api', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Your node js server is running');
});