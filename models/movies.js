const Sequelize=require('sequelize');

const sequelize=require('../util/db.js');

const Movies=sequelize.define('movies',{
    id:{
        type:Sequelize.INTEGER,
        unique:true,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    movie:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
    }
   
})

module.exports=Movies;