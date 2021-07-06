const weather = require('./utils/weather');
const geo=require('./utils/geo');
const express = require('express');

const app = express();

app.get('/',(req,res)=>{
  res.send('<h1>Welcome</h1>');
});

app.get('/Help',(req,res)=>{
  res.send('Welcome');
});

app.get('/Weather',(req,res)=>{
  if(!req.query.address){
    res.send({error:'Address not found'})
  }
 //res.send('req.query');





/*weather(13,-94)
    .then((data)=>{
        console.log(data);
        
    })
    .catch((error)=>{
        console.log(error);

    })*/
geo('Matugama')
    .then((data)=>{
        //console.log(data);
        return weather(data.lat,data.lon)
    })
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        res.send(error);
    })

  })
//const axios = require('axios');

/*const lat=33.44;
const lon=94.04;

const url ='https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,daily,minutely&units=metric&appid=1c87c3e486588c6bc96c779d879eec75';
axios.get(url)
  .then(function (response) {
    // handle success
    //console.log(response.data.current.temp);
    console.log("Currently "+response.data.current.weather[0].description+" and Temparature "+ response.data.current.temp +"C");
  })
  .catch(function (error) {
    // handle error
    console.log("unable to find the location,please try another location");
    //console.log(error);
  });
*/
  //geo api
 /* const location='London';
  const url='http://api.openweathermap.org/geo/1.0/direct?q='+location+'&limit=1&appid=1c87c3e486588c6bc96c779d879eec75';

  axios.get(url)
  .then(function (response) {
    // handle success
    //console.log(response.data.current.temp);
    //console.log("Currently "+response.data.current.weather[0].description+" and Temparature "+ response.data.current.temp +"C");
    console.log(response.data[0].name+" is in "+response.data[0].lat+" "+response.data[0].lon);
  })
  .catch(function (error) {
    // handle error
    console.log("unable to find the location");
    //console.log(error);
  });
  */

  app.listen();