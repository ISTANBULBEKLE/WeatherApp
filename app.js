const express = require('express');
const https = require('https');

const app = express();

app.get('/', function (req, res){
    const url='https://api.openweathermap.org/data/2.5/weather?q=Bristol&appid=f98b6af9bbe15cb396066fac31665a54&units=metric';
    
    https.get(url, function (response){
        // console.log(response);
        console.log('statusCode:', response.statusCode);
        console.log('headers:', response.headers);
    });
    res.send('The weather app is running.');
});




app.listen(3005, function (){
    console.log('The server is running on port 3005.')
})