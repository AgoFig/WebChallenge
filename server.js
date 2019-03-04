const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Seting up a whitelist and check against it:
var whitelist = ['https://s3.amazonaws.com/']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Allowing url from amazonaws to be requested even without cors headers
app.use(cors(corsOptions));

app.listen(port, () => console.log(`Listening on port ${port}`));
