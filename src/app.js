const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

const routerApi = require('./routes');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send('BANKS-API');
});

routerApi(app);

app.listen(port,()=>{
    console.log("Listen on port ==> ", port);
});

module.exports = app;