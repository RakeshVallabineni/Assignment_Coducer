const express=require('express');
const actorRouter=express.Router();
const actorController=require("../Controllers/actorController");
const Authorization=require('../Authentication/Authorization')


actorRouter.post('/saveActor',Authorization,actorController.saveActor);
actorRouter.post('/MovieActors',Authorization,actorController.getMovieActors);


module.exports=actorRouter;