const express = require('express');
const db = require('./dataBase');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

db.getInstance().setModels();

const { userRouter } = require('./router');

app.use('/users', userRouter);

app.listen(3001,() => {
    console.log('Server on port 3001');
});