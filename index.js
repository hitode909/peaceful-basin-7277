var express = require('express');
var app = express();

var String_random = require('string_random.js').String_random;

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.status(200).send(String_random(".+")).end();
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
