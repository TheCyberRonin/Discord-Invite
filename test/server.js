const Express = require('express');

const app = Express();
const port = 3000;

//Serve static files
app.use('/', Express.static('./lib'));

app.listen(port);