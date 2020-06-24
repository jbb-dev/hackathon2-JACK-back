'use-strict'


module.exports = (sequelize, Datatypes) => {
    const Document = sequelize.define('Document', {
        type: {
            type: Datatypes.STRING,
        },
        url: {
            type: Datatypes.STRING
        },
        date: {
            type: Datatypes.DATE
        }
    }, {
        timestamp: false,
        underscored: true
    })

    Document.associate = models => {
        Document.belongsTo(models.Demand)
        Document.belongsTo(models.User)
    }

    return Document

}