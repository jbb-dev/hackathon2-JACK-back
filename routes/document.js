const models = require('../models')

module.exports = app =>{
    app.get('/documents', (req,res) =>{
        models
            .Document
            .findAll()
            .then(documents => res.json(documents))
    })

    app.post('/documents', (req, res) =>{
        models
            .Document
            .create(req.body)
            .then(documents => res.json(documents))
    })

    app.put('/documents/:id', (req, res) =>
        models
            .Document
            .update(req.body, {
            where: {id: req.params.id}
        })
        .then(() => console.log("Done"))
    )

    app.delete('/documents/:id', (req, res) =>
        models
            .Document
            .destroy({
            where: {id: req.params.id}
        })
        .then(() => console.log("Done"))
    )

    
}