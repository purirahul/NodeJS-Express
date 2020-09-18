const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
   res.statusCode = 200;
   res.setHeader('Content-type', 'text/plain');
   next();
})
.get((req, res, next) => {
    res.end("Will send all Leaders data ");
})
.post((req, res, next) => {
    res.end("will add the Leader: "+ req.body.name + " with details " + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation will not supported");
})
.delete((req, res, next) => {
    res.end("Deleting all the leaders ");
});



leaderRouter.route('/:leaderId')
.get((req, res, next) => {
    res.end("Will send details of the leader: " + req.params.leaderId);
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end("POST operation will not supported on /leaders/" + req.params.leaderId);
})
.put((req, res, next) => {
    res.write("Updating leader " + req.params.leaderId + "\n");
    res.end("Will update the leader: " + req.body.name + " with details " + req.body.description );
})
.delete((req, res, next) => {
    res.end("Deleting the leader: " + req.params.dishId);
});


module.exports = leaderRouter;
