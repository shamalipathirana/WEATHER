const axios = require('axios');

 //geo api
 const getGeo=(location)=>{
     return new Promise((resolve,reject)=>{
        const url='http://api.openweathermap.org/geo/1.0/direct?q='+location+'&limit=1&appid=1c87c3e486588c6bc96c779d879eec75';

            axios.get(url)
            .then(function (response) {
            // handle success
            //console.log(response.data.current.temp);
            //console.log("Currently "+response.data.current.weather[0].description+" and Temparature "+ response.data.current.temp +"C");
            resolve({
                name:response.data[0].name,
                lat:response.data[0].lat,
                lon:response.data[0].lon
            });
            //console.log(response.data[0].name+" is in "+response.data[0].lat+" "+response.data[0].lon);
            })
            .catch(function (error) {
            // handle error
            reject({error:'unable to find the location'})
        //console.log("unable to find the location");
            //console.log(error);
            });
     });
 }

 module.exports = getGeo
 //const location='London';
 /*const url='http://api.openweathermap.org/geo/1.0/direct?q='+location+'&limit=1&appid=1c87c3e486588c6bc96c779d879eec75';

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
 });*/