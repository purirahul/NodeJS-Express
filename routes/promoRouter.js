const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
   res.statusCode = 200;
   res.setHeader('Content-type', 'text/plain');
   next();
})
.get((req, res, next) => {
    res.end("Will send all Promotions data ");
})
.post((req, res, next) => {
    res.end("will add the promotion: "+ req.body.name + " with details " + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation will not supported");
})
.delete((req, res, next) => {
    res.end("Deleting all the promotions ");
});



promoRouter.route('/:promoId')
.get((req, res, next) => {
    res.end("Will send details of the promotion: " + req.params.promoId);
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end("POST operation will not supported on /promotions/" + req.params.promoId);
})
.put((req, res, next) => {
    res.write("Updating promotion " + req.params.promoId + "\n");
    res.end("Will update the promotion: " + req.body.name + " with details " + req.body.description );
})
.delete((req, res, next) => {
    res.end("Deleting the promotion: " + req.params.dishId);
});


module.exports = promoRouter;
