const Sequelize=require('sequelize');

const sequelize=require('../util/db.js');

const User=sequelize.define('User',{
    id:{
        type:Sequelize.INTEGER,
        unique:true,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    emailid:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=User;