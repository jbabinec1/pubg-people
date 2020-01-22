
const request = require('request'); 




let apiRequest = https.request(api_url, options, function (res) {
request(options, function (err, res, body) {

        if (err) { return console.log(err); 
        }
        let objectParsed =  JSON.parse((body));           
        response.send(objectParsed); 
    }) 

})





app.use(express.static('dist/pubg-app'));
app.use(limiter);

const port = process.env.PORT || 3000; 

app.get('/*', function(req, res) {
   res.sendFile(path.join(__dirname, 'dist/pubg-app/index.html'));
}); 

app.listen(port, function(){
   console.log('Your node js server is running');
});