const express = require('express');
const app = express();
const path = require('path');
const https = require('https');
const rateLimit = require("express-rate-limit");
const retry = require('retry');
const request = require('request');
require('dotenv').config();
var errorHandler = require('api-error-handler');





const apiLimiter = rateLimit({
    windowMs: 60000, // 1 minute waiting time
    max: 6,
    message: "Too many requests. Wait one minute. "
  });

// Make request to get ID property of player object


app.get('/players/:player', apiLimiter, function(request, response) {


   var key = process.env.API_KEY;
    
    const player = request.params.player;
    const api_url = `https://api.pubg.com/shards/steam/players?filter[playerNames]=${player}`;
    
    var options = {
       method: "GET",
       observe: 'body',
       responseType: 'json',
       headers: {
           "authorization": key,
           "accept": 'application/vnd.api+json'}     

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

        if(objectParsed.errors) {
          res.status(404).send("Not found.");
        }

        
    })
    apiRequest.end();

    }) 


   

    app.get('/player/:id', apiLimiter, function(request, response, next) {

      var key = process.env.API_KEY;

       const id = request.params.id;
       const stats_url = `https://api.pubg.com/shards/steam/players/${id}/seasons/division.bro.official.pc-2018-05`;
       
       var options = {
  
          method: "GET",
          observe: 'body',
          responseType: 'json',
          headers: {
              "authorization": key,
              "accept": 'application/vnd.api+json' }
          };
  
     let data = "";
  
      let seasonRequest = https.request(stats_url, options, function (res)  {
  
          console.log("connected sonion");
  
          res.on("data", chunk => {
              data += chunk;
          })
  
          res.on("end", () => {
              console.log("data collect motha efffa");
           
              //response.end(JSON.stringify(data));
             
              let objectParsed =  JSON.parse(JSON.stringify(data)); 
              response.send(objectParsed);

          }) 

      })
      seasonRequest.end();
     
      //if (err) return console.log(err);
       }) 


      
  

     



app.use(express.static('dist/pubg-app'));

//const port = process.env.PORT || 3000; 

app.use('/*', function(req, res) {
   res.sendFile(path.join(__dirname, '/dist/pubg-app/index.html'));
}); 

app.use(errorHandler());
app.use("/player/:player", apiLimiter);
app.use("/player/:id", apiLimiter);


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
        message: errors["0"].title || 'Internal Server Error',
      },
    });
  });

const port = process.env.PORT || 3000;
app.listen(port, function(){
   console.log('Your node js server is running');
});

