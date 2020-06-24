'use-strict'


module.exports = (sequelize, Datatypes) => {
    const Demand = sequelize.define('Demand', {
        name: {
            type: Datatypes.STRING,
        },
        country: {
            type: Datatypes.STRING
        },
        date: {
            type: Datatypes.DATE
        },
        status: {
            type: Datatypes.BOOLEAN
        }
    }, {
        timestamp: false,
        underscored: true
    })

    Demand.associate = models => {
        Demand.hasMany(models.Document)
        Demand.belongsTo(models.User)
    }

    return Demand

}