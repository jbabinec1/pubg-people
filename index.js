const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const http = require('https');
var router = express.Router();

//const API_KEY = process.env.API_KEY;



let data = "";


// Make request to get ID property of player (steam)

 app.get('/players/:player',  function(request, response) {

    //const player = request.params.player;
     const player = request.params.player;
     const api_url = `https://api.pubg.com/shards/steam/players?filter[playerNames]=${player}`;
     
     var options = {

        method: "GET",
        observe: 'body',
        responseType: 'json',
        headers: {
            "authorization": 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MDUzZmEyMC02MzhjLTAxMzctMGNlYi0wMGQxMWQwYzg3MzQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTU5MDU3ODgxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImpiYWJpbmVjMS1nbWFpIn0.LI-UQ8XiwVQ-vpbE5nmPzbe0sLj7ROJjpPGgXQHRuug',
            "accept": 'application/vnd.api+json' }
        };


  //  let data = "";

    let apiRequest = http.request(api_url, options, function (res) {

        console.log("connected sonion");

        res.on("data", chunk => {
            data += chunk;
        })

      /*  res.on("end", () => {
            console.log("data collect");

           response.end(JSON.stringify(data));
        }) */

    })

    apiRequest.end();

     }) /* end of player id request */




    /* Get seasons stats for player endpoint   */

     app.get('/players/stats/:stat',  function(request, response) {

        //const player = request.params.player;
         const stat = request.params.stat;
         const api_url = `https://api.pubg.com/shards/steam/players/${stat}/seasons/division.bro.official.pc-2018-05`;
         
         var options = {
    
            method: "GET",
            observe: 'body',
            responseType: 'json',
            headers: {
                "authorization": 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MDUzZmEyMC02MzhjLTAxMzctMGNlYi0wMGQxMWQwYzg3MzQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTU5MDU3ODgxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImpiYWJpbmVjMS1nbWFpIn0.LI-UQ8XiwVQ-vpbE5nmPzbe0sLj7ROJjpPGgXQHRuug',
                "accept": 'application/vnd.api+json' }
            };
     
            //let data = "";
    
            let playerStatsRequest = http.request(api_url, options, function (res) {
        
                console.log("connected sonion");
        
                res.on("data", chunk => {
                    data += chunk;
                })
        
                res.on("end", () => {
                    console.log("data collect");
        
                    response.end(JSON.stringify(data));
                })
        
            });
            playerStatsRequest.end();
        }); 


  






app.use(express.static('dist/pubg-app'))

const port = process.env.PORT || 3000; 

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/pubg-app/index.html'));
}); 

app.listen(port, function(){
    console.log('Your node js server is running');
});


