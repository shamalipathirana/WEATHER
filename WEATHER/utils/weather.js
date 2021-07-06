const axios = require('axios');

const getWeather = (lat,lon) =>{
    return new Promise((resolve,reject)=>{
        const url ='https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,daily,minutely&units=metric&appid=1c87c3e486588c6bc96c779d879eec75';
            axios.get(url)

            .then(function (response) {
                // handle success
                //console.log(response.data.current.temp);
                resolve({weather:'Currently '+response.data.current.weather[0].description+'  and Temparature '+ response.data.current.temp +'C'});
                // console.log("Currently "+response.data.current.weather[0].description+" and Temparature "+ response.data.current.temp +"C");
            })
            .catch(function (error) {
                // handle error
                reject({error:'unable to find the location,please try another location'})
                //console.log("unable to find the location,please try another location");
                //console.log(error);
            });

    });
}

module.exports = getWeather
//const lat=33.44;
//const lon=94.04;

/*const url ='https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,daily,minutely&units=metric&appid=1c87c3e486588c6bc96c779d879eec75';
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