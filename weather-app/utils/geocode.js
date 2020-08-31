const axios = require("axios");

const geocode = (address,callback) => {
    // Type a country or place name
       const geoLocationURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoidml2ZWs3OTEiLCJhIjoiY2tlaDUxNm02MXNvbzJybWkweWpsZzUzdyJ9.ctJTxsJAYnviLT0DHPpqAQ&limit=1`;

       axios.get(geoLocationURL).then(res => {
            if(res.data.features.length === 0){
                callback("Use different location",undefined);
            }
            else{
                const { center, place_name : location } = res.data.features[0];
                const data = { 
                    lat : center[1], 
                    long : center[0], 
                    location 
                };
                callback(undefined, data);
            }
       },error => {
            callback(error.response.data.errorMessage || "Something went wrong!",undefined);
       });
}

module.exports = geocode;