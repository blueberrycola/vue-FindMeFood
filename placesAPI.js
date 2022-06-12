/**
 *  This file is used to test the free version of the places api,
 *  used for website portfolio
 *  HIDE YOUR API KEYS :)
 */

require("dotenv").config();
let key = process.env.PLACESAPI;
console.log(key);

var axios = require('axios');
let req = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mongolian&inputtype=textquery&locationbias=circle%3A2000%4047.6918452%2C-122.2226413&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=';
req += key;
var config = {
  method: 'get',
  url: req,
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
