const express = require('express')
const app = express()
const models = require('./models')
const bodyParser = require('body-parser')
const port = 3001


app.use(bodyParser.urlencoded({
    extended : true
}))


require('./routes/user')(app)
require('./routes/children')(app)
require('./routes/document')(app)
require('./routes/demand')(app)


models
.sequelize
.sync()
.then(() => app.listen(port, () => console.log(`App listening on port ${port}`)))
