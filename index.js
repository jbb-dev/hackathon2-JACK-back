const express = require('express');
const models = require('./models'); 
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.get('/', (req, res) => {
  res.send('WELCOME IN THE JACK TEAM !')
})


models
.sequelize
.sync()
.then(() => app.listen(port, () => console.log(`App listening on port ${port}`)))
