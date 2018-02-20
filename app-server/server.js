/* Created by pawan koul on 19-02-2018.
 * 
 * 
 */
 
const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./app/routes/weather_forecast')(app);
const port = 7000; 

	
app.listen(port, () => {
  console.log('Node server is running on port ' + port);
});
