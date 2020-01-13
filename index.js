const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;




 app.get('/players/:player',  async (request, response) => {

    res.send('players:' + req.query.player); 
    // const playername = request.params.player;
     const api_url = `https://api.pubg.com/shards/steam/players?filter[playerNames]=${player}`;

       

    const fetch_response = await fetch(api_url, { method: GET, observe:'body', responseType: 'json', headers: {'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MDUzZmEyMC02MzhjLTAxMzctMGNlYi0wMGQxMWQwYzg3MzQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTU5MDU3ODgxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImpiYWJpbmVjMS1nbWFpIn0.LI-UQ8XiwVQ-vpbE5nmPzbe0sLj7ROJjpPGgXQHRuug', 'Accept': 'application/vnd.api+json' }, body: JSON.stringify(data)});
    const json = await fetch_response.json();
    response.json(json);

}); 




app.use(express.static('dist/pubg-app'))

const port = process.env.PORT || 3000; 

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/pubg-app/index.html'));
}); 

app.listen(port, function(){
    console.log('Your node js server is running');
});


