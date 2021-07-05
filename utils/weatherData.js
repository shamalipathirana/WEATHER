const request =require('request');
const constants=require('../config');

const weatherData = (address,callback) => {
    const url=constants.openWeatherMap.BASE_URL + encodeURIComponent(address) + '&appid=' + constants.openWeatherMap.SECRET_KEY;
    console.log(url);
    request({url,json:true},(error,{body} ) =>{
        console.log(body);
        if(error){
            callback("can not fetch data from open weather map api", undefined)
        }
        else{
            callback(undefined,{
                abc:true
            })
        }
    })
}

module.exports = weatherData;