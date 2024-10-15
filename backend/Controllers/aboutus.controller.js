const AboutUs = require('../Models/aboutus.model');

require('dotenv').config();

const aboutusController = {
    async addContent(req, res){
        // add about us content
        const {aboutus, presidentSpeech, sachivSpeech} = req.body;

        try{
            const aboutusContent = new AboutUs({
                aboutus, presidentSpeech, sachivSpeech
            });

            await aboutusContent.save();
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
        try{
            const aboutusContent = await AboutUs.findOne();
            console.log(aboutusContent);
            if(!aboutusContent)
                return res.status(404).json({message:"No Content found!"});

            res.status(200).json(aboutusContent);
        }catch(err){
            res.status(500).json({message:err.message});
        }
    },
    async updateContent(req, res){
        // update content as per requirement
        const data = req.body;
        try{
            const updatedContent = await AboutUs.findOneAndUpdate({},data, {new:true});
            res.status(200).json({message:"Content updated successfully", updatedContent});
        }catch(err){
            res.status(400).json({message:err.message});
        }
    },
    async deleteContent(req, res){
        // delete content
        try{
            await AboutUs.deleteOne(); // delete the "about us" content
            res.status(200).json({message: 'content deleted successfully'});
        }catch(err){
            res.status(500).json({message:err.message});
        }
    }
}


module.exports = aboutusController;