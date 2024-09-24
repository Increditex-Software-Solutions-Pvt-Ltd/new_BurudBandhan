const express = require('express');
require('dotenv').config();
const { connection } = require("./Config/db");
const { userRouter } = require('./Routes/user.routes');

const PORT = process.env.PORT;

const app = express();

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routes
app.use('/user', userRouter);
app.get('/', (req, res) => res.send('Hello'));

app.listen(PORT, async() => {
    try{
        await connection;
        console.log('Connected with db');
    }catch(err){
        console.log(err.message);
    }

    console.log(`server started on http://localhost:${PORT}`)
});