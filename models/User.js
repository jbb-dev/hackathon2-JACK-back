'use-strict'

const models = require('../models')


module.exports = (sequelize, Datatypes) =>{
    const User = sequelize.define('User', {
        firstname : {
            type : Datatypes.STRING,
        },
        lastname : {
            type : Datatypes.STRING
        },
        birthdate : {
            type : Datatypes.STRING
        },
        email : {
            type : Datatypes.STRING
        },
        immatriculation :{
            type : Datatypes.INTEGER
        },
        password :{
            type : Datatypes.STRING
        },
        nationality :{
            type : Datatypes.STRING
        },
        adress :{
            type : Datatypes.STRING
        },
        zip_code :{
            type : Datatypes.INTEGER
        },
        city :{
            type : Datatypes.STRING
        },
        contact_cpam :{
            type : Datatypes.STRING
        },
        contact_mutuelle :{
            type : Datatypes.STRING
        },
    }, {})

    User.associate = models =>{
        User.hasMany(models.Children)
        User.hasMany(models.Demand)
        User.hasMany(models.Document)
    }

    return User

}