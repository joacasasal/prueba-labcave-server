var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8030;

app.use(bodyParser.json());

app.listen(port, () => console.log('started and listening on port ' + port));

app.get('/', (req, res) => {
  res.send('connected to ' + port);
});

var routes = require('./api/routes/time.routes');
routes(app);

module.exports = app;