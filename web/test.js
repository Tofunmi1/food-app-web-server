'use strict';
var request = require('request');

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=tsla&apikey=JVIR0JILC9KDGYOY';

request.get({
  url: url,
  json: true,
  headers: { 'User-Agent': 'request' }
}, (err, res, data) => {
  if (err) {
    console.log('Error:', err);
  } else if (res.statusCode !== 200) {
    console.log('Status:', res.statusCode);
  } else {
    // data is successfully parsed as a JSON object:
    console.log(data);
    const x = JSON.stringify(data)
    console.log(x)
    const y = JSON.parse(data)
    console.log(y)
  }
});
