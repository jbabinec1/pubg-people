const express = require('express');
const app = express();
const path = require('path');
const http = require('https');
const rateLimit = require("express-rate-limit");




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
           "accept": 'application/vnd.api+json', 'Retry-After' : '100', 'X-RateLimit-Limit': '9' }
       };


   let apiRequest = http.request(api_url, options, function (res) {


   let data = "";

     //  console.log("connected sonion");

       res.on("data", chunk => {
           data += chunk;
       })

       res.on("end", () => {
           
             //response.json((data));
              //response.end(JSON.parse(data));
           
            
                let objectParsed = JSON.parse(data);
                response.send(objectParsed);
                
            



           //   let objectParsed = JSON.parse(data);
          //    response.send(objectParsed);
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
              "accept": 'application/vnd.api+json', 'Retry-After' : '100' }
          };
  
     let data = "";
  
      let seasonRequest = http.request(stats_url, options, function (res) {
  
          console.log("connected sonion");
  
          res.on("data", chunk => {
              data += chunk;
          })
  
          res.on("end", () => {
              console.log("data collect motha efffa");
           
              //response.end(JSON.stringify(data));
             
              let objectParsed = JSON.parse(data);
              response.send(objectParsed);

          }) 
      })
      seasonRequest.end();
     
      //if (err) return console.log(err);
       }) 
  

     
    
   /*    app.use(function(err, req, res, next) {
        res.status(503);
        res.send("Oops, something went wrong.")
     }); */






/* OLD ARCHIVED PROBABLY SHOULD DELETE 
app.get('/players/:player', function(request, res) {
   const request = require('request');
   const async = require('async');
   const http = require('http');
   const https = require('https');
    const player = request.params.player;
    //const id = request.params.id;
    const id_url = `https://api.pubg.com/shards/steam/players?filter[playerNames]=${player}`;
    const player_season = `https://api.pubg.com/shards/steam/players/account.c0e530e9b7244b358def282782f893af/seasons/division.bro.official.pc-2018-05`;
    
    var options = {
      
       method: "GET",
       observe: 'body',
       responseType: 'json',
       headers: {
           "authorization": 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MDUzZmEyMC02MzhjLTAxMzctMGNlYi0wMGQxMWQwYzg3MzQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTU5MDU3ODgxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImpiYWJpbmVjMS1nbWFpIn0.LI-UQ8XiwVQ-vpbE5nmPzbe0sLj7ROJjpPGgXQHRuug',
           "accept": 'application/vnd.api+json' }
       };
 //  let data = "";
 
 /* UGHHHHHHHHH 
    }) */

    const limiter = rateLimit({
        windowMs: 4 * 60 * 1000, // 15 minutes
        max: 9 // limit each IP to 100 requests per windowMs
      });






app.use(express.static('dist/pubg-app'));
app.use(limiter);

const port = process.env.PORT || 3000; 

app.get('/*', function(req, res) {
   res.sendFile(path.join(__dirname, 'dist/pubg-app/index.html'));
}); 

app.listen(port, function(){
   console.log('Your node js server is running');
});