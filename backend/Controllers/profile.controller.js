require('dotenv').config();
const Profile = require('../Models/profile.model');
const User = require('../Models/user.model');

const profileController = {
    async addProfile(req, res){
        // add your profile here
    },
    async getAllProfiles(req, res){
        // get all profile here

        try{
            const user = await User.findById(req.user.id);
            // if user if admin
            if(user.role == 'admin'){
                const profiles = await Profile.find();
                res.json(profiles);
            }else{
                let gender;
                // if user is bride then she can see groom's profiles
                // if user is groom then he can see bride's profiles
                if(user.gender == 'female'){
                    gender = "male";
                }else{
                    gender = "female";
                }
    
                const profiles = await Profile.find(gender);
    
                res.json(profiles);
            }  
            
        }catch(err){
            res.status(500).json({error: err.message});
        }
    },
    async getSingleProfile(req, res){
        // get single Profile by id here
        try{
            const profile = await Profile.findById(req.params.id);
            res.json(profile);
        }catch(err){
            res.status(500).json({error: err.message});
        }
    },
    async updateProfile(req, res){
        // update your profile here
    },
    async deleteProfile(req, res){
        // delete profile
        try{
            const profile = await Profile.findById(req.params.id);
            if(!profile)
                res.status(404).json({message: "Profile not found!"});

            await Profile.findByIdAndDelete({_id: req.params.id});

            res.status(200).json({message: "Profile deleted successfully!"});
        } catch(err){
            res.status(500).json({message: err.message});
        }
    }

}


module.exports = profileController;