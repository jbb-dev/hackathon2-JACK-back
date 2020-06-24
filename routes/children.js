const models = require('../models')

module.exports = app =>{
    app.get('/children', (req,res) =>{
        models
            .Children
            .findAll()
            .then(children => res.json(children))
    })

    app.post('/children', (req, res) =>{
        models
            .Children
            .create(req.body)
            .then(newChildren => {
                newChildren.addUser(req.body.userId)
                res.json(newChildren)
            })
    })
}