require('dotenv').config();
const { User } = require('../Models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userController = {
    async signup(req, res){
        try {
            const data = req.body;
            const email = data.email;
            console.log(data);

            const existingUser = await User.findOne({email});

            if(existingUser){
                return res.status(400).json({message: "Email is already exist!"});
            }

            // hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(data.password, salt);

            const newUser = new User({
                ...data,
                password:hashedPassword
            });


            // save user and generate token
            const savedUser = await newUser.save();
            const token = jwt.sign({id: savedUser._id}, process.env.JWT_KEY, {expiresIn: '1h'});

            // send response
            res.status(201).json({ token, user: newUser });

           
        }catch(err){
            res.status(401).json({
                message: err.message
            });
        }
    },
    async login(req, res){
        const { email, password } = req.body;

        try{
            const user = await User.findOne({email});
            console.log(user);

            if(!user){
                return res.status(400).json({
                    message: "Email is not exist!"
                })
            }

            const checkPassword = await bcrypt.compare(password, user.password);

            if(!checkPassword){
                return res.status(400).json({
                    message: "Incorrect password!"
                });
            }

            const token = jwt.sign({ userID: user._id }, process.env.JWT_KEY, {expiresIn: '1h'});

            res.status(200).json({ token, user });
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }
}


module.exports = { userController };