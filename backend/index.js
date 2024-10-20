const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connection } = require("./Config/db");
const { userRouter } = require('./Routes/user.routes');
const { storyRouter } = require('./Routes/success_story.routes');
const { successVideoRouter } = require('./Routes/success_video.routes');
const memberRouter = require('./Routes/member.routes');
const profileRouter = require('./Routes/profile.routes');
const aboutusRouter = require('./Routes/aboutus.routes');

const PORT = process.env.PORT;

const app = express();

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

// routes
app.use('/api/user/auth', userRouter);
app.use('/api/success-stories', storyRouter);
app.use('/api/success-videos', successVideoRouter);
app.use('/api/members', memberRouter);
app.use('/api/marriage-profile', profileRouter);
app.use('/api/about-us', aboutusRouter);

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


