require('dotenv').config();
const Profile = require('../Models/profile.model');
const User = require('../Models/user.model');

const profileController = {
    async addProfile(req, res){
        const data = req.body;

        try{
            const newProfile = new Profile({
                ...data,
                user:req.user.id
            });
            await newProfile.save();
            res.status(201).json({
                message: "Congratulations, You have created your profile successfully!",
                profile:newProfile
            });
        }catch(err){
            res.status(500).json({message:err.message});
        }

        
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
    
                const profiles = await Profile.find({gender});
    
                res.json(profiles);
            }  
            
        }catch(err){
            res.status(500).json({error: err.message});
        }
    },
    async getProfilesByFilter(req, res){
        const {fullName, age, qualification, city, dist} = req.query;
        // get profiles by query parameters
        
        try{
            const user = await User.findById(req.user.id);
            let profiles;
            let gender;

            // if user if admin
            if(user.role == 'admin'){
                profiles = await Profile.find();
                // res.json(profiles);
            }else{
                
                // if user is bride then she can see groom's profiles
                // if user is groom then he can see bride's profiles
                if(user.gender == 'female'){
                    gender = "male";
                }else{
                    gender = "female";
                }

                if(fullName){
                    profiles = await Profile.find({gender, fullName});
       
                  }
       
                  if(age){
                   profiles = await Profile.find({gender, age});
                  }
       
                  if(qualification){
                   profiles = await Profile.find({gender, qualification});
                  }
       
                  if(city){
                   profiles = await Profile.find({gender, city});
                  }
       
                  if(dist){
                   profiles = await Profile.find({gender, dist});
                  }
            }

            res.json(profiles);
             
            
        }catch(err){
            res.status(500).json({error: err.message});
        }
    },
    async getSingleProfileByUserId(req, res){
        // get single Profile by user id here
        try{
            const profile = await Profile.findOne({user:req.user.id});
            
            res.json(profile);
        }catch(err){
            res.status(500).json({error: err.message});
        }
    },
    async getSingleProfileByProfileId(req, res){
        // get single Profile by profile id here
        try{
            const profile = await Profile.findById(req.params.profileId);
            res.json(profile);
        }catch(err){
            res.status(500).json({error: err.message});
        }
    },
    async updateProfile(req, res){
        // update your profile here
        const {
            fullName, photo, qualification, presentlyWorking,
            annualIncome, expectation, hobbies, fatherOccupation, familyMembers,
            relativesSurnameList, email, personalContact, parentsContact, currentAddress,
            state, district, taluka, town, postalCode  
        } = req.body;

        try{
            const profile = await Profile.findById(req.params.id);

            if(!profile)
                res.status(404).json({message:"Profile not found!"});

            // add required updates here
            if(fullName) profile.fullName = fullName;
            if(photo) profile.photo = photo;
            if(qualification) profile.qualification = qualification;
            if(presentlyWorking) profile.presentlyWorking = presentlyWorking;
            if(annualIncome) profile.annualIncome = annualIncome;
            if(expectation) profile.expectation = expectation;
            if(hobbies) profile.hobbies = hobbies;
            if(fatherOccupation) profile.fatherOccupation = fatherOccupation;
            if(familyMembers) profile.familyMembers = familyMembers;
            if(relativesSurnameList) profile.relativesSurnameList = relativesSurnameList;
            if(email) profile.email = email;
            if(personalContact) profile.personalContact = personalContact;
            if(parentsContact) profile.parentsContact = parentsContact;
            if(currentAddress) profile.currentAddress = currentAddress;
            if(state) profile.state = state;
            if(district) profile.district = district;
            if(taluka) profile.taluka = taluka;
            if(town) profile.town = town;
            if(postalCode) profile.postalCode = postalCode;
    
            await profile.save();
            res.status(200).json({message:"Profile updated successfully!"});
        }catch(err){
            res.status(500).json({message:err.message});
        }
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