const ACTOR=require('../models/actors.js');
const MOVIE=require('../models/movies.js');

exports.saveActor=async (req,res,next)=>{
    try{
        const { actor }=req.body;
        const movieName=req.query.moviename

        let findMovie=await MOVIE.findAll({where:{movie:movieName}}) 
    
        if(findMovie.length>0){

            const actorResponse=await ACTOR.create({
                actorname:actor,
                movieId:findMovie[0].id
            })

            if(actorResponse){
                res.status(200).json({message:'saved successfully'})
            }
        }
        else{
            res.status(401).json({message:'Movie doesnot exist'})
        } 
    }
    catch(err){

        if(err.parent.code==='ER_DUP_ENTRY'){
            res.status(401).json({message:'Actor named already uploaded'})
        }
    }
}


exports.getMovieActors=async (req,res,next)=>{
    try{
        const { actor }=req.body;
    
        const findMovie=await ACTOR.findOne({where:{actorname:actor}}) 
        if(findMovie!=null){
            const findMovieActors=await MOVIE.findAll({where:{id:findMovie.movieId}})
        
            if(findMovieActors.length>0){
                res.status(200).json({REVIEWS:findMovieActors})
            }
        }
        else{
            res.status(403).json({message:"actor doesnot exist"})
        }
    }
    catch(err){
         if(err){
            res.status(404).json({message:"something went wrong"})
         }
    }
    
    
}