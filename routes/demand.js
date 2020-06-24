const models = require('../models')

module.exports = app =>{
    app.get('/demands', (req,res) =>{
        models
            .Demand
            .findAll()
            .then(demands => res.json(demands))
    })

    app.post('/demands', (req, res) =>{
        models
            .Demand
            .create(req.body)
            .then(demands => res.json(demands))
    })

    app.put('/demands/:id', (req, res) =>
        models
            .Demand
            .update(req.body, {
            where: {id: req.params.id}
        })
            .then(() => res.end("Done"))
    )

    app.delete('/demands/:id', (req, res) =>
        models
            .Demand
            .destroy({
            where: {id: req.params.id}
        })
            .then(() => res.end("Done"))
    )
}