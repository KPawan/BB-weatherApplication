/* Created by pawan koul on 19-02-2018.
 * 
 * Use Cors for Cross domain issue locally if client is not running on server
 */
 
const express        = require('express');
const app            = express();
var cors 			 = require('cors');
const bodyParser     = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
require('./app/routes/weather_forecast')(app);
const port = 7000; 

	
app.listen(port, () => {
  console.log('Node server is running on port ' + port);
});
