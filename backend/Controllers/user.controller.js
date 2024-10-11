require('dotenv').config();
const  User = require('../Models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userController = {
    async signup(req, res){
        try {
            const {fullName, email, gender, password, role } = req.body;
            
            // check if there's already an admin
            if(role == 'admin'){
                const existingAdmin = await User.findOne({role: 'admin'});
                if(existingAdmin){
                    return res.status(400).json({message: 'Admin user already exists!'});
                }
            }
            

            // check if email is already used by another user
            const existingUser = await User.findOne({email});
           
            if(existingUser){
                return res.status(400).json({message: "Email is already exist!"});
            }

            // hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new User({
                fullName, email, gender, role,
                password:hashedPassword
            });


            // save user and generate token
            const savedUser = await newUser.save();
            const token = jwt.sign({id: savedUser._id}, process.env.JWT_KEY);
            // const token = jwt.sign({id: savedUser._id}, process.env.JWT_KEY, {expiresIn: '1h'});

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
            console.log(checkPassword);

            if(!checkPassword){
                return res.status(400).json({
                    message: "Incorrect password!"
                });
            }

            const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);
            // const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, {expiresIn: '1h'});

            res.status(200).json({ token, user });
        }catch(err){
            res.status(500).json({message: err.message});
        }
    },
   async getProfile(req, res){
    try{
        const user = await User.findById(req.user.id);
        res.json(user);
    }catch(err){
        res.status(500).json({error: err.message});
    }
   },
   async editProfile(req, res){

    const {fullName, gender} = req.body;
    

    try{
        
        const user = await User.findById(req.user.id);

        if(!user){
            return res.status(404).json({message: 'User not found!'});
        }

        if(fullName) user.fullName = fullName;
        if(gender) user.gender = gender;

        const updatedUser = await user.save();

        res.json(updatedUser);
      
    } catch (err){
        res.status(500).json({error: err.message});
    }

   },
   async changePassword(req, res){
    const {oldPassword, newPassword} = req.body;
    try{
        // find user by it's ID from token
        const user = await User.findById(req.user.id);

        if(!user){
            return res.status(404).json({message: "User not found!"});
        }

        // check if old password matches the user's current password
        const isMatch = await bcrypt.compare(oldPassword, user.password);

        if(!isMatch){
            return res.status(400).json({message:"Old password is incorrect"});
        }

        // hash new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // update user password
        user.password = hashedPassword;
        await user.save();

        res.status(200).json({message: "Password changed successfully"});
    }catch(err){
        res.status(500).json({message: err.message});
    }
   },
   async deleteUser(req, res){
    try{
        const user = await User.findById(req.user.id);

        if(!user){
            return res.status(404).json({message: "User not found"});
        }

        // delete the user from database
        await User.findByIdAndDelete({ _id: req.user.id });

        res.status(200).json({message: "User deleted successfully"});
    }catch(err){
        res.status(500).json({message: err.message});
    }
   }
}


module.exports = { userController };