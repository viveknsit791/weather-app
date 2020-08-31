const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const http = require("http");
// console.log(process.argv);
// const address = process.argv[2];

// if(address){
//     geocode(address, (error, { lat, long } = {}) => {
//         if(error){
//             return console.log(error);
//         }
//         forecast(lat, long, (error, { temperature, feelslike } = {}) => {
//             if(error){
//                 return console.log("Error");
//             }
//             console.log("Current Temperature : " + temperature + "\nFeels Like Temperature : " + feelslike);
//         });    
//     })
// }
// else {
//     console.log("Please enter some city to find the temperature");
// }



// console.log(process.argv);

// yargs.command({
//     "command" : "findTemp",
//     "description" : "Find temperature",
//     "builder" : {
//         "city" : {
//             "description" : "city lat/long",
//             "demandOption" : true,
//             "type" : "string"
//         }
//     },
//     handler(argv){
//         console.log(argv);
//     }
// })


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const add = (a,b,callback) => {
//     setTimeout(() => {
//         callback(a + b);
//     },2000);
// }

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })
const url = `http://api.weatherstack.com/current?access_key=823a3d3cc016b4d0eb58807fd52a8c12&query=40,-75`
const request = http.request(url, (response) => {
    let data = '';
    
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});


request.on('error',(error) => {
    console.log(error);
})

request.on('end');



