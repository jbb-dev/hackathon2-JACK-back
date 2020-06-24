const models = require('../models')

module.exports = app =>{
    app.get('/users', (req,res) =>{
        models
            .User
            .findAll({include:models.Children})
            .then(users => res.json(users))
    })

    app.post('/users', (req, res) =>{
        models
            .User
            .create(req.body)
            .then(user => {
                user.addChildren(req.body.childrenId) 
                res.json(user)})
    })

    app.put('/users/:id', (req, res) =>
        models
            .User
            .update(req.body, {
            where: {id: req.params.id}
        })
        .then(() => console.log("Done"))
);

app.delete('/users/:id', (req, res) =>
        models
            .User
            .destroy({
            where: {id: req.params.id}
        })
        .then(() => console.log("Done"))
);
}