const axios = require('axios');
const url= 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily,minutely&appid=1c87c3e486588c6bc96c779d879eec75'
axios.get('url')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
  