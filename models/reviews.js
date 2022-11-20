const Sequelize=require('sequelize');

const sequelize=require('../util/db.js');

const Reviews=sequelize.define('review',{
    id:{
        type:Sequelize.INTEGER,
        unique:true,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    review:{
        type:Sequelize.STRING,
  
        allowNull:false
    }
   
})

module.exports=Reviews;