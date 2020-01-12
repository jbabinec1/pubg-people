const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('src'))

const port = process.env.PORT || 3000; 

app.get('/api', function(req, res) {
    res.sendFile(path.join(__dirname, 'app.component.html'));
});

app.listen(port, function(){
    console.log('Your node js server is running');
});