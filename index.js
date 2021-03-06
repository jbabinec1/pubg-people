const express = require('express');
const app = express();
const path = require('path');
const https = require('https');
const rateLimit = require("express-rate-limit");
const retry = require('retry');
const request = require('request');
require('dotenv').config();






const apiLimiter = rateLimit({
    windowMs: 60000, // 1 minute waiting time
    max: 6,
    message: "Too many requests. Wait one minute. "
  });


// Make request to get ID property of player object

app.get('/players/:player/:platform', apiLimiter, function(request, response) {

    var key = process.env.API_KEY;
   let platform = request.params.platform; 
    const player = request.params.player;
    const api_url = `https://api.pubg.com/shards/${platform}/players?filter[playerNames]=${player}`;
    
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
               let objectParsed = JSON.parse(JSON.stringify(data));
              // typeof objectParsed.data === 'undefined'
              //let objectSelect = objectParsed["data"];
              
               
               if ( objectParsed.includes('errors') ) {
              response.status(404).send("No data for that player name.");
                
            } else {
                response.send(objectParsed);
            }  
                        
        }) 


        
    })
    apiRequest.end();

    }) 





   /* Season 5 stats. Currently testing with Lifetime stats endpoint   */

    app.get('/season5Console/:id', apiLimiter, function(request, response, next) {

      var key = process.env.API_KEY;
       
      //const platform = request.params.platform; 
       const id = request.params.id;
       platform = request.params.platform; 
       const stats_url = `https://api.pubg.com/shards/xbox/players/${id}/seasons/division.bro.official.console-05`; 
       
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




       /* Season 5 PC */
       app.get('/season5PC/:id', apiLimiter, function(request, response, next) {

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









/* Season 6 Console */
       app.get('/season6Console/:id', apiLimiter, function(request, response, next) {

        var key = process.env.API_KEY;
  
         const id = request.params.id;
         const stats_url = `https://api.pubg.com/shards/xbox/players/${id}/seasons/division.bro.official.console-06`;
         
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


        /* Season 6 PC */
       app.get('/season6PC/:id', apiLimiter, function(request, response, next) {

        var key = process.env.API_KEY;
  
         const id = request.params.id;
         const stats_url = `https://api.pubg.com/shards/steam/players/${id}/seasons/division.bro.official.pc-2018-06`;
         
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










    

         /*.....      Lifetime Stats     ...*/ 

     app.get('/lifetime/:id/:platform', apiLimiter, function(request, response, next) {


        var key = process.env.API_KEY;    
        //const platform = request.params.platform; 
        const id = request.params.id;
        platform = request.params.platform; 
         const stats_url = `https://api.pubg.com/shards/${platform}/players/${id}/seasons/lifetime`;
         
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

const port = process.env.PORT || 8081;
app.listen(port, function(){
   console.log('Your node js server is running');
});

