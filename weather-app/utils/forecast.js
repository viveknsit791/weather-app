const axios = require("axios");

const forecast = (lat,long,callback) => {
    const url = `http://api.weatherstack.com/current?access_key=823a3d3cc016b4d0eb58807fd52a8c12&query=${lat},${long}`;
    axios.get(url).then(response => {
        if(response.data.error){
            callback("Could find the temperature at current location",undefined);
        }
        else{
            callback(undefined,response.data.current);
        }
    },
    error => {
        callback(error.response.data ||"Something went wrong!",undefined);
    })
}
module.exports = forecast;