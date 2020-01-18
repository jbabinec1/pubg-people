const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const http = require('https');


//const API_KEY = process.env.API_KEY;


// Make request to get ID property of player object

 app.get('/players/:player', function(request, response) {

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

    let data = "";

    let apiRequest = http.request(api_url, options, function (res) {

      //  console.log("connected sonion");

        res.on("data", chunk => {
            data += chunk;
        })

        res.on("end", () => {
            
              //response.json((data));
               //response.end(JSON.parse(data));
               let objectParsed = JSON.parse(data);
               response.send(objectParsed);

        }) 

    })

    apiRequest.end();

     }) 




     app.get('/player/:id', function(request, response) {

        const id = request.params.id;
        const stats_url = `https://api.pubg.com/shards/steam/players/${id}/seasons/division.bro.official.pc-2018-05`;
        
        var options = {
   
           method: "GET",
           observe: 'body',
           responseType: 'json',
           headers: {
               "authorization": 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MDUzZmEyMC02MzhjLTAxMzctMGNlYi0wMGQxMWQwYzg3MzQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTU5MDU3ODgxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImpiYWJpbmVjMS1nbWFpIn0.LI-UQ8XiwVQ-vpbE5nmPzbe0sLj7ROJjpPGgXQHRuug',
               "accept": 'application/vnd.api+json' }
           };

   
      let data = "";
   
       let seasonRequest = http.request(stats_url, options, function (res) {
   
           console.log("connected sonion");
   
           res.on("data", chunk => {
               data += chunk;
           })
   
           res.on("end", () => {
               console.log("data collect motha efffa");
               //response.end(JSON.parse(data));
               //response.end(JSON.stringify(data));
              
               let objectParsed = JSON.parse(data);
               response.send(objectParsed);

           }) 
       })
       seasonRequest.end();
       //if (err) return console.log(err);
        }) 




         app.get('/players/:player', function(request, response) {

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

    let data = "";

    let apiRequest = http.request(api_url, options, function (res) {

      //  console.log("connected sonion");

        res.on("data", chunk => {
            data += chunk;
        })

        res.on("end", () => {
            
              //response.json((data));
               //response.end(JSON.parse(data));
               let objectParsed = JSON.parse(data);
               response.send(objectParsed);

        }) 

    })

    apiRequest.end();

     });



     /* Season 4 lookup  */

     app.get('/season4/:id', function(request, response) {

        const id = request.params.id;
        const statsfour_url = `https://api.pubg.com/shards/steam/players/${id}/seasons/division.bro.official.pc-2018-04`;
        
        var options = {
   
           method: "GET",
           observe: 'body',
           responseType: 'json',
           headers: {
               "authorization": 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MDUzZmEyMC02MzhjLTAxMzctMGNlYi0wMGQxMWQwYzg3MzQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTU5MDU3ODgxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImpiYWJpbmVjMS1nbWFpIn0.LI-UQ8XiwVQ-vpbE5nmPzbe0sLj7ROJjpPGgXQHRuug',
               "accept": 'application/vnd.api+json' }
           };

   
      let data = "";
   
       let seasonRequestTwo = http.request(statsfour_url, options, function (res) {
   
           console.log("connected sonion");
   
           res.on("data", chunk => {
               data += chunk;
           })
   
           res.on("end", () => {
               console.log("data collect motha efffazz");
               //response.end(JSON.parse(data));
               //response.end(JSON.stringify(data));
              
               let objectParsedd = JSON.parse(data);
               response.send(objectParsedd);

           }) 
       })
       seasonRequestTwo.end();
       //if (err) return console.log(err);
        }) 
   

      



app.use(express.static('dist/pubg-app'))

const port = process.env.PORT || 3000; 

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/pubg-app/index.html'));
}); 

app.listen(port, function(){
    console.log('Your node js server is running');
});
