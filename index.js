var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// listen (start app with node index.js) 
app.listen(app.get('port'),function(){
    console.log("App listening on port ", app.get('port'));
});
