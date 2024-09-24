require('dotenv').config();
const { User } = require('../Models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


export const userController = {
    async register(req, res){
        try {
            const data = req.body;
            const email = data.email;
            console.log(data);

            const existingUser = await User.findOne({email});

            if(existingUser){
                return res.status(400).json({message: "Email is already exist!"});
            }

            bcrypt.hash(data.password, 8, async(err, hash) =>{
                const newUser = new User({
                    ...data,
                    password:hash
                });

                await newUser.save();
                res.status(201).json({
                    message: "User created successfully!",
                    newUser
                })
            })
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
                return res.status(401).json({
                    message: "Email is not exist!"
                })
            }

            const checkPassword = await bcrypt.compare(password, user.password);

            if(!checkPassword){
                return res.status(401).json({
                    message: "Incorrect password!"
                });
            }

            const token = jwt.sign({
                userID: user._id
            }, process.env.JWT_KEY)

            res.status(200).json({
                message: "Login successful",
                token
            })
        }catch(err){
            res.status(401).json({message: err.message});
        }
    }
}