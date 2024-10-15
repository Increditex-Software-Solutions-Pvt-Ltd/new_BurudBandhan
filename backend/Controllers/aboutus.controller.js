const AboutUs = require('../Models/aboutus.model');

require('dotenv').config();

const aboutusController = {
    async addContent(req, res){
        // add about us content
        const {aboutus, presidentSpeech, sachivSpeech} = req.body;

        try{
            const aboutUsContent = new AboutUs({
                aboutus, presidentSpeech, sachivSpeech
            });

            await aboutUsContent.save();
            res.status(201).json({
                message:"Added about us content successfully.",
                aboutusContent
            });

        }catch(err){
            res.status(500).json({message:err.message});
        }
    },
    async getContent(req, res){
        // get about us content
    },
    async updateContent(req, res){
        // update content as per requirement
    },
    async deleteContent(req, res){
        // delete content
    }
}


module.exports = aboutusController;