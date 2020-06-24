'use-strict'


module.exports = (sequelize, Datatypes) => {
    const Children = sequelize.define('Children', {
        firstname: {
            type: Datatypes.STRING,
        },
        lastname: {
            type: Datatypes.STRING
        },
        birthdate: {
            type: Datatypes.STRING
        }
    }, {
        timestamp: false,
        underscored: true
    })

    Children.associate = models => {
        Children.belongsTo(models.User)
    }

    return Children

}