const Sequelize=require('sequelize');

const sequelize=require('../util/db.js');

const Actors=sequelize.define('actors',{
    id:{
        type:Sequelize.INTEGER,
        unique:true,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    actorname:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
    }
   
})

module.exports=Actors;