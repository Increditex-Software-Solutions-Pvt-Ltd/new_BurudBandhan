require('dotenv').config();
const Profile = require('../Models/profile.model');

const profileController = {
    async addProfile(req, res){
        // add your profile here
    },
    async getAllProfiles(req, res){
        // get all profile here
    },
    async getSingleProfile(req, res){
        // get single Profile by id here
    },
    async updateProfile(req, res){
        // update your profile here
    },
    async deleteProfile(req, res){
        // delete profile
    }

}


module.exports = profileController;