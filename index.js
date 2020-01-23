const express = require('express');
const app = express();
const path = require('path');
const https = require('https');
const retry = require('retry');
const request = require('request');



//var request = require('requestretry');



// Make request to get ID property of player object


app.get('/players/:player', function(request, response, next) {

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
  
       let apiRequest = https.request(api_url, options, function (res) {

        let data = "";
 
        res.on("data", chunk => {
            data += chunk;
        }) 
 
        res.on("end", () => {          
             
              //let objectParsed = JSON.parse(data);
               let objectParsed =  JSON.parse(JSON.stringify(data));          
               response.send(objectParsed);               
        }) 
    })
    apiRequest.end();

    }) 


   

    app.get('/player/:id', function(request, response, next) {

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
  
      let seasonRequest = https.request(stats_url, options, function (res) {
  
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
  

     

    app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/pubg-app/index.html'));
     }); 


app.use(express.static('dist/pubg-app'));

const port = process.env.PORT || 3000; 

/*app.get('/*', function(req, res) {
   res.sendFile(path.join(__dirname, '/dist/pubg-app/index.html'));
}); */

app.use((req, res, next) => {

    const error = new Error('Not found')
    error.status = 404;
    res.send("Yeah, something went wrong.");
    next(error);
 }); 


 app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
      error: {
        status: error.status || 500,
        message: error.message || 'Internal Server Error',
      },
    });
  });


app.listen(port, function(){
   console.log('Your node js server is running');
});

