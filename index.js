const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', (req,res,next) => {
   res.statusCode = 200;
   res.setHeader('Content-type', 'text/plain');
   next();
});

app.get('/dishes', (req, res, next) => {
    res.end("Will send dishes data ");
});

app.post('/dishes', (req, res, next) => {
    res.end("will add the dish "+ req.body.name + " with details " + req.body.description);
});

app.put('/dishes', (req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation will not supported");
});

app.delete('/dishes', (req, res, next) => {
    res.end("Deleting all the dishes ");
});


app.get('/dishes/:dishId', (req, res, next) => {
    res.end("Will send details of the dish: " + req.params.dishId);
});

app.post('/dishes/:dishId', (req, res, next) => {
  res.statusCode = 403;
  res.end("POST operation will not supported on /dishes/" + req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) => {
    res.write("Updating dish " + req.params.dishId + "/n");
    res.end("Will update the dish: " + req.body.name + " with details " + req.body.description );
});

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end("Deleting the dish: " + req.params.dishId);
});

app.use(express.static(__dirname+ '/public'));

app.use((req, res, next) => {


    res.setStatuscode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end("<html><body><h1>This is a express server</h1></body></html>");

});

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
